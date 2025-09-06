# Salesforce Generic CSV Export Tool

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Salesforce](https://img.shields.io/badge/Salesforce-LWC-orange.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-stable-success.svg)

A **Lightning Web Component (LWC)** that lets you export Salesforce data into a **CSV file** for any object dynamically.  
The component **retrieves all available fields in real time** from the selected object and generates a clean CSV export without requiring any hardcoded logic.

---

## Features
- Works with **any standard or custom object**
- **Dynamically retrieves all fields** in the component
- Exports records to **CSV format**
- Simple plug-and-play **Lightning Web Component**
- Fully reusable and lightweight
- **custom file name** for the exported CSV

---
## File Structure
```plaintext
sObject-csv-exporter/
│
├── export/
│   ├── export.html
│   ├── export.js
│   ├── export.js-meta.xml
│
├── README.md
```
---

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Vishwas-Srivastav/sObject-csv-exporter

---

## Usage

Add the component to a **Lightning App Page** or **Record Page** and provide the required parameters:

- `records` → The list of records you want to export (e.g., `leadRecords, accountRecords`)
- `file-name` → The CSV file name for download

```bash
<c-export records={expenseRecords} file-name={fileName}></c-export>
```
---

## Use Cases

- Quick **ad-hoc data export** without creating reports
- Exporting **custom object data** with all fields
- Sharing Salesforce data with **non-Salesforce users**
- Debugging and troubleshooting object data
