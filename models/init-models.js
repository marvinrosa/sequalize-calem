const DataTypes = require("sequelize").DataTypes;
const _acl_group = require("./acl_group");
const _asset = require("./asset");
const _asset_comment = require("./asset_comment");
const _asset_contract = require("./asset_contract");
const _asset_depreciation = require("./asset_depreciation");
const _asset_downtime = require("./asset_downtime");
const _asset_meter = require("./asset_meter");
const _asset_part = require("./asset_part");
const _asset_seq = require("./asset_seq");
const _asset_service_log = require("./asset_service_log");
const _asset_type = require("./asset_type");
const _budget = require("./budget");
const _budget_status_log = require("./budget_status_log");
const _budget_title = require("./budget_title");
const _contact = require("./contact");
const _contract = require("./contract");
const _contract_contact = require("./contract_contact");
const _contract_doc = require("./contract_doc");
const _costcode = require("./costcode");
const _craft = require("./craft");
const _dash_wo_orig_day = require("./dash_wo_orig_day");
const _dash_wo_orig_md = require("./dash_wo_orig_md");
const _dept = require("./dept");
const _doc_attachment = require("./doc_attachment");
const _doc_type = require("./doc_type");
const _doc_upload = require("./doc_upload");
const _document = require("./document");
const _downtime_unit_cost = require("./downtime_unit_cost");
const _in_audit = require("./in_audit");
const _in_comment = require("./in_comment");
const _in_doc = require("./in_doc");
const _in_location = require("./in_location");
const _in_reserved = require("./in_reserved");
const _in_seq = require("./in_seq");
const _in_stock = require("./in_stock");
const _in_tran = require("./in_tran");
const _in_tran_worksheet = require("./in_tran_worksheet");
const _in_type = require("./in_type");
const _in_vendor = require("./in_vendor");
const _ins_citation = require("./ins_citation");
const _inspection = require("./inspection");
const _inventory = require("./inventory");
const _manufacturer = require("./manufacturer");
const _meter_transaction = require("./meter_transaction");
const _meter_type = require("./meter_type");
const _pm = require("./pm");
const _pm_asset = require("./pm_asset");
const _pm_audit = require("./pm_audit");
const _pm_comment = require("./pm_comment");
const _pm_dependency = require("./pm_dependency");
const _pm_doc = require("./pm_doc");
const _pm_downtime = require("./pm_downtime");
const _pm_labor = require("./pm_labor");
const _pm_meter = require("./pm_meter");
const _pm_part = require("./pm_part");
const _pm_safety = require("./pm_safety");
const _pm_season = require("./pm_season");
const _pm_step = require("./pm_step");
const _pm_tool = require("./pm_tool");
const _po = require("./po");
const _po_address = require("./po_address");
const _po_item = require("./po_item");
const _po_seq = require("./po_seq");
const _po_status_log = require("./po_status_log");
const _project = require("./project");
const _project_type = require("./project_type");
const _rcm_action = require("./rcm_action");
const _rcm_action_part = require("./rcm_action_part");
const _rcm_consequence = require("./rcm_consequence");
const _rcm_failure = require("./rcm_failure");
const _rcm_function = require("./rcm_function");
const _rcm_template = require("./rcm_template");
const _recycle_bin = require("./recycle_bin");
const _req_item = require("./req_item");
const _req_seq = require("./req_seq");
const _req_status_log = require("./req_status_log");
const _requisition = require("./requisition");
const _sched_shutdown = require("./sched_shutdown");
const _sched_user = require("./sched_user");
const _scheduler_job = require("./scheduler_job");
const _scheduler_job_log = require("./scheduler_job_log");
const _scheduler_task = require("./scheduler_task");
const _semaphore = require("./semaphore");
const _tax_code = require("./tax_code");
const _tax_rate = require("./tax_rate");
const _team = require("./team");
const _training = require("./training");
const _training_certificate = require("./training_certificate");
const _training_course = require("./training_course");
const _training_course_type = require("./training_course_type");
const _training_user = require("./training_user");
const _uom = require("./uom");
const _uom_map = require("./uom_map");
const _users = require("./users");
const _vendor = require("./vendor");
const _vendor_contact = require("./vendor_contact");
const _version = require("./version");
const _version_upgrade_log = require("./version_upgrade_log");
const _wo_attachment = require("./wo_attachment");
const _wo_comment = require("./wo_comment");
const _wo_doc = require("./wo_doc");
const _wo_generation = require("./wo_generation");
const _wo_labor = require("./wo_labor");
const _wo_meter = require("./wo_meter");
const _wo_part = require("./wo_part");
const _wo_planned_downtime = require("./wo_planned_downtime");
const _wo_planned_labor = require("./wo_planned_labor");
const _wo_planned_part = require("./wo_planned_part");
const _wo_planned_tool = require("./wo_planned_tool");
const _wo_safety = require("./wo_safety");
const _wo_sched_labor = require("./wo_sched_labor");
const _wo_semaphore = require("./wo_semaphore");
const _wo_seq = require("./wo_seq");
const _wo_status_log = require("./wo_status_log");
const _wo_step = require("./wo_step");
const _wo_tool = require("./wo_tool");
const _workorder = require("./workorder");
const _zc_users = require("./zc_users");

function initModels(sequelize) {
  const acl_group = _acl_group(sequelize, DataTypes);
  const asset = _asset(sequelize, DataTypes);
  const asset_comment = _asset_comment(sequelize, DataTypes);
  const asset_contract = _asset_contract(sequelize, DataTypes);
  const asset_depreciation = _asset_depreciation(sequelize, DataTypes);
  const asset_downtime = _asset_downtime(sequelize, DataTypes);
  const asset_meter = _asset_meter(sequelize, DataTypes);
  const asset_part = _asset_part(sequelize, DataTypes);
  const asset_seq = _asset_seq(sequelize, DataTypes);
  const asset_service_log = _asset_service_log(sequelize, DataTypes);
  const asset_type = _asset_type(sequelize, DataTypes);
  const budget = _budget(sequelize, DataTypes);
  const budget_status_log = _budget_status_log(sequelize, DataTypes);
  const budget_title = _budget_title(sequelize, DataTypes);
  const contact = _contact(sequelize, DataTypes);
  const contract = _contract(sequelize, DataTypes);
  const contract_contact = _contract_contact(sequelize, DataTypes);
  const contract_doc = _contract_doc(sequelize, DataTypes);
  const costcode = _costcode(sequelize, DataTypes);
  const craft = _craft(sequelize, DataTypes);
  const dash_wo_orig_day = _dash_wo_orig_day(sequelize, DataTypes);
  const dash_wo_orig_md = _dash_wo_orig_md(sequelize, DataTypes);
  const dept = _dept(sequelize, DataTypes);
  const doc_attachment = _doc_attachment(sequelize, DataTypes);
  const doc_type = _doc_type(sequelize, DataTypes);
  const doc_upload = _doc_upload(sequelize, DataTypes);
  const document = _document(sequelize, DataTypes);
  const downtime_unit_cost = _downtime_unit_cost(sequelize, DataTypes);
  const in_audit = _in_audit(sequelize, DataTypes);
  const in_comment = _in_comment(sequelize, DataTypes);
  const in_doc = _in_doc(sequelize, DataTypes);
  const in_location = _in_location(sequelize, DataTypes);
  const in_reserved = _in_reserved(sequelize, DataTypes);
  const in_seq = _in_seq(sequelize, DataTypes);
  const in_stock = _in_stock(sequelize, DataTypes);
  const in_tran = _in_tran(sequelize, DataTypes);
  const in_tran_worksheet = _in_tran_worksheet(sequelize, DataTypes);
  const in_type = _in_type(sequelize, DataTypes);
  const in_vendor = _in_vendor(sequelize, DataTypes);
  const ins_citation = _ins_citation(sequelize, DataTypes);
  const inspection = _inspection(sequelize, DataTypes);
  const inventory = _inventory(sequelize, DataTypes);
  const manufacturer = _manufacturer(sequelize, DataTypes);
  const meter_transaction = _meter_transaction(sequelize, DataTypes);
  const meter_type = _meter_type(sequelize, DataTypes);
  const pm = _pm(sequelize, DataTypes);
  const pm_asset = _pm_asset(sequelize, DataTypes);
  const pm_audit = _pm_audit(sequelize, DataTypes);
  const pm_comment = _pm_comment(sequelize, DataTypes);
  const pm_dependency = _pm_dependency(sequelize, DataTypes);
  const pm_doc = _pm_doc(sequelize, DataTypes);
  const pm_downtime = _pm_downtime(sequelize, DataTypes);
  const pm_labor = _pm_labor(sequelize, DataTypes);
  const pm_meter = _pm_meter(sequelize, DataTypes);
  const pm_part = _pm_part(sequelize, DataTypes);
  const pm_safety = _pm_safety(sequelize, DataTypes);
  const pm_season = _pm_season(sequelize, DataTypes);
  const pm_step = _pm_step(sequelize, DataTypes);
  const pm_tool = _pm_tool(sequelize, DataTypes);
  const po = _po(sequelize, DataTypes);
  const po_address = _po_address(sequelize, DataTypes);
  const po_item = _po_item(sequelize, DataTypes);
  const po_seq = _po_seq(sequelize, DataTypes);
  const po_status_log = _po_status_log(sequelize, DataTypes);
  const project = _project(sequelize, DataTypes);
  const project_type = _project_type(sequelize, DataTypes);
  const rcm_action = _rcm_action(sequelize, DataTypes);
  const rcm_action_part = _rcm_action_part(sequelize, DataTypes);
  const rcm_consequence = _rcm_consequence(sequelize, DataTypes);
  const rcm_failure = _rcm_failure(sequelize, DataTypes);
  const rcm_function = _rcm_function(sequelize, DataTypes);
  const rcm_template = _rcm_template(sequelize, DataTypes);
  const recycle_bin = _recycle_bin(sequelize, DataTypes);
  const req_item = _req_item(sequelize, DataTypes);
  const req_seq = _req_seq(sequelize, DataTypes);
  const req_status_log = _req_status_log(sequelize, DataTypes);
  const requisition = _requisition(sequelize, DataTypes);
  const sched_shutdown = _sched_shutdown(sequelize, DataTypes);
  const sched_user = _sched_user(sequelize, DataTypes);
  const scheduler_job = _scheduler_job(sequelize, DataTypes);
  const scheduler_job_log = _scheduler_job_log(sequelize, DataTypes);
  const scheduler_task = _scheduler_task(sequelize, DataTypes);
  const semaphore = _semaphore(sequelize, DataTypes);
  const tax_code = _tax_code(sequelize, DataTypes);
  const tax_rate = _tax_rate(sequelize, DataTypes);
  const team = _team(sequelize, DataTypes);
  const training = _training(sequelize, DataTypes);
  const training_certificate = _training_certificate(sequelize, DataTypes);
  const training_course = _training_course(sequelize, DataTypes);
  const training_course_type = _training_course_type(sequelize, DataTypes);
  const training_user = _training_user(sequelize, DataTypes);
  const uom = _uom(sequelize, DataTypes);
  const uom_map = _uom_map(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);
  const vendor = _vendor(sequelize, DataTypes);
  const vendor_contact = _vendor_contact(sequelize, DataTypes);
  const version = _version(sequelize, DataTypes);
  const version_upgrade_log = _version_upgrade_log(sequelize, DataTypes);
  const wo_attachment = _wo_attachment(sequelize, DataTypes);
  const wo_comment = _wo_comment(sequelize, DataTypes);
  const wo_doc = _wo_doc(sequelize, DataTypes);
  const wo_generation = _wo_generation(sequelize, DataTypes);
  const wo_labor = _wo_labor(sequelize, DataTypes);
  const wo_meter = _wo_meter(sequelize, DataTypes);
  const wo_part = _wo_part(sequelize, DataTypes);
  const wo_planned_downtime = _wo_planned_downtime(sequelize, DataTypes);
  const wo_planned_labor = _wo_planned_labor(sequelize, DataTypes);
  const wo_planned_part = _wo_planned_part(sequelize, DataTypes);
  const wo_planned_tool = _wo_planned_tool(sequelize, DataTypes);
  const wo_safety = _wo_safety(sequelize, DataTypes);
  const wo_sched_labor = _wo_sched_labor(sequelize, DataTypes);
  const wo_semaphore = _wo_semaphore(sequelize, DataTypes);
  const wo_seq = _wo_seq(sequelize, DataTypes);
  const wo_status_log = _wo_status_log(sequelize, DataTypes);
  const wo_step = _wo_step(sequelize, DataTypes);
  const wo_tool = _wo_tool(sequelize, DataTypes);
  const workorder = _workorder(sequelize, DataTypes);
  const zc_users = _zc_users(sequelize, DataTypes);


  return {
    acl_group,
    asset,
    asset_comment,
    asset_contract,
    asset_depreciation,
    asset_downtime,
    asset_meter,
    asset_part,
    asset_seq,
    asset_service_log,
    asset_type,
    budget,
    budget_status_log,
    budget_title,
    contact,
    contract,
    contract_contact,
    contract_doc,
    costcode,
    craft,
    dash_wo_orig_day,
    dash_wo_orig_md,
    dept,
    doc_attachment,
    doc_type,
    doc_upload,
    document,
    downtime_unit_cost,
    in_audit,
    in_comment,
    in_doc,
    in_location,
    in_reserved,
    in_seq,
    in_stock,
    in_tran,
    in_tran_worksheet,
    in_type,
    in_vendor,
    ins_citation,
    inspection,
    inventory,
    manufacturer,
    meter_transaction,
    meter_type,
    pm,
    pm_asset,
    pm_audit,
    pm_comment,
    pm_dependency,
    pm_doc,
    pm_downtime,
    pm_labor,
    pm_meter,
    pm_part,
    pm_safety,
    pm_season,
    pm_step,
    pm_tool,
    po,
    po_address,
    po_item,
    po_seq,
    po_status_log,
    project,
    project_type,
    rcm_action,
    rcm_action_part,
    rcm_consequence,
    rcm_failure,
    rcm_function,
    rcm_template,
    recycle_bin,
    req_item,
    req_seq,
    req_status_log,
    requisition,
    sched_shutdown,
    sched_user,
    scheduler_job,
    scheduler_job_log,
    scheduler_task,
    semaphore,
    tax_code,
    tax_rate,
    team,
    training,
    training_certificate,
    training_course,
    training_course_type,
    training_user,
    uom,
    uom_map,
    users,
    vendor,
    vendor_contact,
    version,
    version_upgrade_log,
    wo_attachment,
    wo_comment,
    wo_doc,
    wo_generation,
    wo_labor,
    wo_meter,
    wo_part,
    wo_planned_downtime,
    wo_planned_labor,
    wo_planned_part,
    wo_planned_tool,
    wo_safety,
    wo_sched_labor,
    wo_semaphore,
    wo_seq,
    wo_status_log,
    wo_step,
    wo_tool,
    workorder,
    zc_users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
