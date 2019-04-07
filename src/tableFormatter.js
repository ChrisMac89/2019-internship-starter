function format(table) {

  //Gets the length of the table -1. 
  var tableLength = table[table.length-1][table.length-1]; 

  const tableText = table.map(function(row) {

    //loop through the row array
    for (var i = 0; i < row.length; i++) {
      
      //translates the row array into a string
      var store = row[i].toString();

      //Padding variable for adding extra spaces if needed. 
      var paddingForNumbers = tableLength.toString().length;
    
      //add padding spaces to string value
      while(store.length < paddingForNumbers)
        {
          //using padStart to pad the numbers
          store = store.padStart(store.length+1, " ");
        }

        //storing in the array
        row[i] = store;
    }

    return row.join(" ");
  });

  return "\n" + tableText.join("\n") + "\n";
}

module.exports = { format };
