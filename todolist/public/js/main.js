// load data
function loadData() {
    $.ajax({
        url: "/todolist",
        type: "GET"
    }).
    then(data => {
        $("#list").html("");
        for (let i = 0; i < data.length; i++) {
            let date = formatDate(new Date(data[i].date));
            $("#list").
            append(`<p id="${data[i]._id}" class="">${data[i].title} - ${date}
                         <button type="button" class="btn btnDelete"><i class="fas fa-trash-alt"></i></button>
                         <button type="button" class="btn btnUpdate"><i class="fas fa-pen-square"></i></button>
                    </p>`);
        };
        // delete button
        $('.btnDelete').click(function(){
            deleteById($(this).parent().attr('id'))
        });
        // update data
        $('.btnUpdate').on('click', function(){
            var id = $(this).parent().attr('id');
            console.log(id);
            var newTitle = prompt("change title");            
            $.ajax({
                url: "/todolist/" + id,
                type: "PUT",
                data: {
                    title: newTitle
                }
            }).
            then(()=>{
                $.ajax({
                    url: "/todolist/edit/" + id,
                    type: "GET",
                }).
                then((data) => {
                    let date = formatDate(new Date(data.date));
                    console.log(data);
                    console.log(id);
                    $("#" + id).
                    html(`<p id="${data._id}" class="">${data.title} - ${date} 
                        <button type="button" class="btn btnDelete"><i class="fas fa-trash-alt"></i></button>
                        <button type="button" class="btn btnUpdate"><i class="fas fa-pen-square"></i></button>
                    </p>`);
                    
                })
            }).
            catch(err => console.log(err))
        })
    });
}
loadData();
// add task
$("#btnAddTask").click(() => {
    var title = $("#title").val();
    var description = $("#description").val();
    $.ajax({
        url: '/todolist',
        type: 'POST',
        data: {
            title: title,
        }
    }).
    then((data) => {
        let date = formatDate(new Date(data.date));
        $("#list").
        append(`<p id="${data._id}" class="">${data.title} - ${date} 
                    <button type="button" class="btn btnDelete"><i class="fas fa-trash-alt"></i></button>
                    <button type="button" class="btn btnUpdate"><i class="fas fa-pen-square"></i></button>
                </p>`);
        // delete button
        $('.btnDelete').click(function(){
            deleteById($(this).parent().attr('id'))
        });
        // update data
        $('.btnUpdate').on('click', function(){
            var id = $(this).parent().attr('id');
            console.log(id);
            var newTitle = prompt("change title");
            console.log(newTitle);
            
            $.ajax({
                url: "/todolist/" + id,
                type: "PUT",
                data: {
                    title: newTitle
                }
            }).
            then(()=>{
                $.ajax({
                    url: "/todolist/edit/" + id,
                    type: "GET",
                }).
                then((data) => {
                    let date = formatDate(new Date(data.date));
                    console.log(data);
                    console.log(id);
                    $("#" + id).
                    html(`<p id="${data._id}" class="">${data.title} - ${date} 
                        <button type="button" class="btn btnDelete"><i class="fas fa-trash-alt"></i></button>
                        <button type="button" class="btn btnUpdate"><i class="fas fa-pen-square"></i></button>
                    </p>`);
                })
            }).
            catch(err => console.log(err))
        })

    });
});

// delete data
function deleteById(id) {
    $.ajax({
        url: '/todolist/' + id,
        type: "DELETE",
    }).
    then(() => {
        $("#" + id).remove();
    }).
    catch(err => {console.log(err);})
}
function formatDate(d){
	let day = d.getDate();
	let month = Number(d.getMonth()) + 1;
	let year = d.getFullYear();
	let formatedDate = day + "-" + month + "-" + year;
	return formatedDate;
}
// function updateById(id) {
//     $.ajax({
//         url: '/todolist/' + id,
//         type: "PUT",
//     }).
//     then(() => {
//         console.log("updated");
//     }).
//     catch(err => {console.log(err);})
// }