import frappe
from frappe.model.utils.rename_field import rename_field


def execute():
	frappe.reload_doc("shifaa", "doctype", frappe.scrub("Shifaa Settings"))

	try:
		rename_field("Shifaa Settings", "automate_appointment_invoicing", "show_payment_popup")
	except Exception as e:
		if e.args and e.args[0]:
			raise
