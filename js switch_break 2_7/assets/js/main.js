console.log("test")

function showtxt(event) {
    event.preventDefault();
    const input = document.getElementById("myList").value;
    console.log(input);

    switch (input) {
        case "0":
            output = "<b>Brief und Postkarte</b><br/>L: 10 - 23, 5 cm<br/>B: 7 - 12, 5 cm<br/>H: bis 1 cm";
            console.log(output)
            break;
        case "1":
            output = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm";
            console.log(output)
            break;
        case "2":
            output = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm";
            console.log(output)
            break;
        case "3":
            output = "<b> DHL Paket 10 kg</b > <br>bis 120 x 60 x 60 cm";
            console.log(output)
            break;
        default:
            output = "<b>Extra große Größe</b>";
    }
    document.getElementById("masse").innerHTML = output;
}





