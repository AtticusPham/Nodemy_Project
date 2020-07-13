// load data
$.ajax({
    url: "/todolist",
    type: "GET"
}).
then(data => {
    $("#content").html("");
    for (let i = 0; i < data.length; i++) {
        $("#content").
        append(`<li id="${data[i]._id}" class="list-group-item p-0">${data[i].title} - ${data[i].timeCreated} <button type="button" class="btn btn-primary btn-sm btnDelete">-</button></li>`);
    };
    $('.btnDelete').click(function(){
        deleteById($(this).parent().attr('id'))
    });
});
// add task
$("#btnAddTask").click(() => {
    var title = $("#title").val();
    var description = $("#description").val();
    $.ajax({
        url: '/todolist',
        type: 'POST',
        data: {
            title: title,
            description: description
        }
    }).
    then((data) => {
        $("#content").
        append(`<li id="${data._id}" class="list-group-item p-0">${data.title} - ${data.description} <button type="button" class="btn btn-primary btn-sm btnDelete">-</button></li>`);
        $('.btnDelete').click(function(){
            console.log("hello");
            deleteById($(this).parent().attr('id'))
        });
    });
});
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