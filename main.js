function Grade(marks) {
    if (marks >= 80) {
        return "A+";
    }
    else if (marks >= 70) {
        return "A";
    }
    else if (marks >= 60) {
        return "A-";
    }
    else if (marks >= 50) {
        return "B";
    }
    else if (marks >= 40) {
        return "C";
    }
    else {
        return "F"
    }
}

let Your_Mark = prompt("Input Your Mark Between 1-100");

document.write("Mark: " + Your_Mark + "  Grade:  " + Grade(Your_Mark));