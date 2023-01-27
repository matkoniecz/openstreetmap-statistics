import sys
import numpy as np
import util

# init
DATA_DIR = sys.argv[1]
TOP_K = 100
months, years = util.get_months_years(DATA_DIR)
year_to_year_index = util.list_to_dict(years)
month_index_to_year_index = {month_i: year_to_year_index[month[:4]] for month_i, month in enumerate(months)}

top_ids = util.load_top_k_list(DATA_DIR, "imagery")
ch_id_to_rank = util.list_to_dict(top_ids["changesets"])
ed_id_to_rank = util.list_to_dict(top_ids["edits"])
co_id_to_rank = util.list_to_dict(top_ids["contributors"])

index_to_tag = util.load_index_to_tag(DATA_DIR, "imagery")
ch_rank_to_name = [index_to_tag[contributor_id] for contributor_id in top_ids["changesets"]]
ed_rank_to_name = [index_to_tag[edit_id] for edit_id in top_ids["edits"]]
co_rank_to_name = [index_to_tag[contributor_id] for contributor_id in top_ids["contributors"]]

mo_ch = np.zeros((TOP_K, len(months)), dtype=np.int64)
mo_ed = np.zeros((TOP_K, len(months)), dtype=np.int64)
mo_ed_all = np.zeros((len(months)), dtype=np.int64)
mo_ed_that_use_tag = np.zeros((len(months)), dtype=np.int64)
mo_co_set = [[set() for _ in range(len(months))] for _ in range(TOP_K)]

# accumulate data
for csv_line in sys.stdin:
    data = util.CSVData(csv_line)
    month_index = data.month_index

    mo_ed_all[month_index] += data.edits

    if len(data.imagery_index_list) == 0:
        continue

    mo_ed_that_use_tag[month_index] += data.edits

    for imagery_index in data.imagery_index_list:
        if imagery_index in ch_id_to_rank:
            rank = ch_id_to_rank[imagery_index]
            mo_ch[rank, month_index] += 1

        if imagery_index in ed_id_to_rank:
            rank = ed_id_to_rank[imagery_index]
            mo_ed[rank, month_index] += data.edits

        if imagery_index in co_id_to_rank:
            rank = co_id_to_rank[imagery_index]
            mo_co_set[rank][month_index].add(data.user_index)

# save plots
TOPIC = "Imagery Service"
with util.add_questions(TOPIC) as add_question:

    add_question(
        "How popular are imagery services?",
        "4f2c",
        util.get_single_line_plot(
            "monthly edits that use at least one imagery service",
            "%",
            months,
            util.get_percent(mo_ed_that_use_tag, mo_ed_all),
            percent=True,
        ),
        util.get_text_element(
            "This graph is based on imagery tag set automatically by iD, Vespucci and Go Map!!. As other editors are"
            " not using it and iD is vastly more popular than other relevant editors this graph is very close to"
            " 'market share of iD by edit volume'. JOSM users are typically using source field to note actually"
            " used sources"
        ),
    )

    add_question(
        "How many contributors does each imagery service have per month?",
        "5bc5",
        util.get_multi_line_plot(
            "monthly contributor count per imagery software",
            "contributors",
            months,
            util.set_to_length(mo_co_set)[:10],
            co_rank_to_name[:10],
        ),
        util.get_table(
            "yearly contributor count per imagery software",
            years,
            util.monthly_set_to_yearly_with_total(mo_co_set, years, month_index_to_year_index),
            TOPIC,
            co_rank_to_name,
        ),
    )

    add_question(
        "How many edits does each imagery service have per month?",
        "af79",
        util.get_multi_line_plot(
            "monthly edits count per imagery service", "edits", months, mo_ed[:10], ed_rank_to_name[:10]
        ),
        util.get_table(
            "yearly edits count per imagery service",
            years,
            util.monthly_to_yearly_with_total(mo_ed, years, month_index_to_year_index),
            TOPIC,
            ed_rank_to_name,
        ),
    )

    add_question(
        "What's the total amount of contributors, edits and changesets of imagery service over time?",
        "327d",
        util.get_multi_line_plot(
            "total contributor count of imagery service",
            "contributors",
            months,
            util.set_cumsum(mo_co_set),
            co_rank_to_name[:10],
        ),
        util.get_multi_line_plot(
            "total edit count of imagery service", "edits", months, util.cumsum(mo_ed), ed_rank_to_name[:10]
        ),
        util.get_multi_line_plot(
            "total changeset count of imagery service",
            "changesets",
            months,
            util.cumsum(mo_ch),
            ch_rank_to_name[:10],
        ),
    )
