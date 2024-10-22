// $(document).ready(()=>{
//     $.ajax({
//         url: "http://project-manager-back/",
//         method : "GET",
//         success: (response)=>{
//             $("#result").html(response);
//         },
//         error: ()=>{
//             console.log("Error in fetching data");
//             $("#result").html(
//                 "An error occurred while fetching data. Please try again later"
//             );
//         },
//     });
// });

        // добавления проектов и задач будет здесь
        $('#projectForm').submit(function (event) {
            event.preventDefault();
            // Логика для добавления проекта
        });

        $('#taskForm').submit(function (event) {
            event.preventDefault();
            // Логика для добавления задачи
        });