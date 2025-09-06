import { LightningElement, api } from 'lwc';

export default class Export extends LightningElement {
    @api records; 
    @api fileName; 

    handleExport() {
        if (!this.records || this.records.length === 0) {
            alert('No data available to export.');
            return;
        }

        // Auto-detect fields from the first record
        const fields = Object.keys(this.records[0]);
        const csvString = this.convertArrayToCSV(this.records, fields);

        // Create temporary link for download
        const element = document.createElement('a');
        element.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvString);
        element.target = '_self';
        element.download = `${this.fileName || 'Export'}.csv`; 
        document.body.appendChild(element);
        element.click();
    }

    convertArrayToCSV(objArray) {
        // exclude attributes
        const fields = Object.keys(objArray[0]).filter(f => f !== 'attributes');
        let csvString = fields.join(',') + '\n';
    
        objArray.forEach(record => {
            const row = fields.map(field => {
                let value = record[field];
    
                if (value === null || value === undefined) {
                    value = '';
                } else if (typeof value === 'object') {
                    // Flatten nested objects to JSON string or pick a property like Name
                    value = JSON.stringify(value);
                }
    
                return `"${String(value).replace(/"/g, '""')}"`; // escape quotes
            }).join(',');
            csvString += row + '\n';
        });
    
        return csvString;
    }
    
}
