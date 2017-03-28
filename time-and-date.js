var katescript = {
    "author": "Brian Donovan",
    "license": "BSD",
    "revision": 1,
    "kate-version": "0",
    "functions": ["insertYYMMDDdatestamp", "insertYYMMDDhhmmdatestamp", "insertDatestamp", "insertDateTimestamp"],
    "actions": [
        {   "function": "insertYYMMDDdatestamp",
            "name": "Insert YYMMDD current date",
            "category": "Brian's Utility Belt"
        },
        {   "function": "insertYYMMDDhhmmdatestamp",
            "name": "Insert YYMMDD hh:mm current date and time",
            "shortcut": "Ctrl+Alt+d",
            "category": "Brian's Utility Belt"
        },
        {   "function": "insertDatestamp",
            "name": "Insert the current date",
            "category": "Brian's Utility Belt"
        }
,
        {   "function": "insertDateTimestamp",
            "name": "Insert the current date and time",
            "shortcut": "Ctrl+Alt+t",
            "category": "Brian's Utility Belt"
        }
    ]
};

require ("range.js");

function insertYYMMDDdatestamp(){
    var objDateTime = new Date(Date.now());
    var str4digitYear = objDateTime.getUTCFullYear().toString();
    var str2digitMonth = objDateTime.getUTCMonth().toString();
    if (str2digitMonth.length === 1) {
        str2digitMonth = '0' + str2digitMonth;
    }
    var str2digitDate = objDateTime.getUTCDate().toString();
    if (str2digitDate.length === 1) {
        str2digitDate = '0' + str2digitDate;
    }
    var strDatestamp = str4digitYear+str2digitMonth+str2digitDate;
    document.editBegin();
    document.insertText(view.cursorPosition().line, view.cursorPosition().column, strDatestamp);
    document.editEnd();
    return true;
}

function insertYYMMDDhhmmdatestamp(){
    var objDateTime = new Date(Date.now());
    var str4digitYear = objDateTime.getUTCFullYear().toString();
    var str2digitMonth = objDateTime.getUTCMonth().toString();
    if (str2digitMonth.length === 1) {
        str2digitMonth = '0' + str2digitMonth;
    }
    var str2digitDate = objDateTime.getUTCDate().toString();
    if (str2digitDate.length === 1) {
        str2digitDate = '0' + str2digitDate;
    }
    var strDatestamp = str4digitYear+str2digitMonth+str2digitDate;
    var str2digitHours = objDateTime.getUTCHours().toString();
    if (str2digitHours.length === 1) {
        str2digitHours = '0' + str2digitHours;
    }
    var str2digitMinutes = objDateTime.getUTCMinutes().toString();
    if (str2digitMinutes.length === 1) {
        str2digitMinutes = '0' + str2digitMinutes;
    }
    var strDatestampWithTime = strDatestamp+' '+str2digitHours+':'+str2digitMinutes;
    document.editBegin();
    document.insertText(view.cursorPosition().line, view.cursorPosition().column, strDatestampWithTime);
    document.editEnd();
    return true;
}

function insertDatestamp(){
    var objDateTime = new Date(Date.now());
    var strDate = objDateTime.toLocaleDateString();
    document.editBegin();
    document.insertText(view.cursorPosition().line, view.cursorPosition().column, strDate);
    document.editEnd();
    return true;
}

function insertDateTimestamp(){
    var objDateTime = new Date(Date.now());
    var strDate = objDateTime.toLocaleDateString();
    var strTime = objDateTime.toLocaleTimeString();
    var strDateTimestamp = strDate+' '+strTime;
    document.editBegin();
    document.insertText(view.cursorPosition().line, view.cursorPosition().column, strDateTimestamp);
    document.editEnd();
    return true;
}
