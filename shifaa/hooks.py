from . import __version__ as app_version  # noqa

app_name = "shifaa"
app_title = "Marley Health"
app_publisher = "earthians Health Informatics Pvt. Ltd."
app_description = "Modern, Open Source HIS built on Frappe and ERPNext"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info@earthianslive.com"
app_license = "GNU GPL V3"
required_apps = ["erpnext"]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/shifaa/css/shifaa.css"
app_include_js = "shifaa.bundle.js"

# include js, css files in header of web template
# web_include_css = "/assets/shifaa/css/shifaa.css"
# web_include_js = "/assets/shifaa/js/shifaa.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "shifaa/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
doctype_js = {"Sales Invoice": "public/js/sales_invoice.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
jinja = {
	"methods": [
		"shifaa.shifaa.doctype.diagnostic_report.diagnostic_report.diagnostic_report_print",
		"shifaa.shifaa.utils.generate_barcodes",
		"shifaa.shifaa.doctype.observation.observation.get_observations_for_medical_record",
	]
}

# Installation
# ------------

# before_install = "shifaa.install.before_install"
after_install = "shifaa.setup.setup_shifaa"

# Uninstallation
# ------------

before_uninstall = "shifaa.uninstall.before_uninstall"
after_uninstall = "shifaa.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "shifaa.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

override_doctype_class = {
	"Sales Invoice": "shifaa.shifaa.custom_doctype.sales_invoice.ShifaaSalesInvoice",
}

# Document Events
# ---------------
# Hook on document methods and events

doc_events = {
	"*": {
		"on_submit": "shifaa.shifaa.doctype.patient_history_settings.patient_history_settings.create_medical_record",
		"on_cancel": "shifaa.shifaa.doctype.patient_history_settings.patient_history_settings.delete_medical_record",
		"on_update_after_submit": "shifaa.shifaa.doctype.patient_history_settings.patient_history_settings.update_medical_record",
	},
	"Sales Invoice": {
		"on_submit": "shifaa.shifaa.utils.manage_invoice_submit_cancel",
		"on_cancel": "shifaa.shifaa.utils.manage_invoice_submit_cancel",
		"validate": "shifaa.shifaa.utils.manage_invoice_validate",
	},
	"Company": {
		"after_insert": "shifaa.shifaa.utils.create_shifaa_service_unit_tree_root",
		"on_trash": "shifaa.shifaa.utils.company_on_trash",
	},
	"Patient": {
		"after_insert": "shifaa.regional.india.abdm.utils.set_consent_attachment_details"
	},
}

scheduler_events = {
	"all": [
		"shifaa.shifaa.doctype.patient_appointment.patient_appointment.send_appointment_reminder",
	],
	"daily": [
		"shifaa.shifaa.doctype.patient_appointment.patient_appointment.update_appointment_status",
		"shifaa.shifaa.doctype.fee_validity.fee_validity.update_validity_status",
	],
}

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"shifaa.tasks.all"
# 	],
# 	"daily": [
# 		"shifaa.tasks.daily"
# 	],
# 	"hourly": [
# 		"shifaa.tasks.hourly"
# 	],
# 	"weekly": [
# 		"shifaa.tasks.weekly"
# 	],
# 	"monthly": [
# 		"shifaa.tasks.monthly"
# 	],
# }

# Testing
# -------

before_tests = "shifaa.shifaa.utils.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "shifaa.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "shifaa.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
auto_cancel_exempted_doctypes = [
	"Inpatient Medication Entry",
]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"shifaa.auth.validate"
# ]

global_search_doctypes = {
	"Shifaa": [
		{"doctype": "Patient", "index": 1},
		{"doctype": "Medical Department", "index": 2},
		{"doctype": "Vital Signs", "index": 3},
		{"doctype": "Shifaa Practitioner", "index": 4},
		{"doctype": "Patient Appointment", "index": 5},
		{"doctype": "Shifaa Service Unit", "index": 6},
		{"doctype": "Patient Encounter", "index": 7},
		{"doctype": "Antibiotic", "index": 8},
		{"doctype": "Diagnosis", "index": 9},
		{"doctype": "Lab Test", "index": 10},
		{"doctype": "Clinical Procedure", "index": 11},
		{"doctype": "Inpatient Record", "index": 12},
		{"doctype": "Sample Collection", "index": 13},
		{"doctype": "Patient Medical Record", "index": 14},
		{"doctype": "Appointment Type", "index": 15},
		{"doctype": "Fee Validity", "index": 16},
		{"doctype": "Practitioner Schedule", "index": 17},
		{"doctype": "Dosage Form", "index": 18},
		{"doctype": "Lab Test Sample", "index": 19},
		{"doctype": "Prescription Duration", "index": 20},
		{"doctype": "Prescription Dosage", "index": 21},
		{"doctype": "Sensitivity", "index": 22},
		{"doctype": "Complaint", "index": 23},
		{"doctype": "Medical Code", "index": 24},
	]
}

domains = {
	"Shifaa": "shifaa.setup",
}

# nosemgrep
standard_portal_menu_items = [
	{
		"title": "Personal Details",
		"route": "/personal-details",
		"reference_doctype": "Patient",
		"role": "Patient",
	},
	{
		"title": "Lab Test",
		"route": "/lab-test",
		"reference_doctype": "Lab Test",
		"role": "Patient",
	},
	{
		"title": "Prescription",
		"route": "/prescription",
		"reference_doctype": "Patient Encounter",
		"role": "Patient",
	},
	{
		"title": "Patient Appointment",
		"route": "/patient-appointments",
		"reference_doctype": "Patient Appointment",
		"role": "Patient",
	},
]

has_website_permission = {
	"Lab Test": "shifaa.shifaa.web_form.lab_test.lab_test.has_website_permission",
	"Patient Encounter": "shifaa.shifaa.web_form.prescription.prescription.has_website_permission",
	"Patient Appointment": "shifaa.shifaa.web_form.patient_appointments.patient_appointments.has_website_permission",
	"Patient": "shifaa.shifaa.web_form.personal_details.personal_details.has_website_permission",
}

standard_queries = {
	"Shifaa Practitioner": "shifaa.shifaa.doctype.shifaa_practitioner.shifaa_practitioner.get_practitioner_list"
}

treeviews = [
	"Shifaa Service Unit",
]

company_data_to_be_ignored = [
	"Shifaa Service Unit",
]
