const confirmation = () => {
    const response = confirm("Are you sure you want to Book the ride?");

console.log(response);
}
const response = confirm("Are you sure you want to Book the ride?");

if (response) {
    // add code if the user pressed the Ok button
    console.log("Ok was pressed");
} else {
    // add code if the user pressed the Cancel button
    console.log("Cancel was pressed");
}
