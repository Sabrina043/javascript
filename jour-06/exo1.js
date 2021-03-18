//  01 - Format

// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console



var firstFormatDate = new Date("2010-06-22")

function formatDate(FormatD) {
    
    firstFormatDate = new Date()

    console.log(firstFormatDate)
    console.log(firstFormatDate.getDate() + "/" + (firstFormatDate.getMonth() + 1) + "/" + firstFormatDate.getFullYear())
}

formatDate(firstFormatDate)




























// function formatDate (str)  {

//     str = new Date() ;

//     str= getDay(),getMonth(),getYear(),

//     console.log(str)



// }

// formatDate()























// function formatDate(myformadate){

//     var formatDate = new Date().toDateString()

//     console.log(formatDate)
// }

// formatDate()