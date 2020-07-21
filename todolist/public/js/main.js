

// load data
function loadData() {
    $.ajax({
        url: "/todolist",
        type: "GET"
    }).
    then((data) => {
        $("#list").html("");
        for (let i = 0; i < data.length; i++) { 
            $("#list").append(`<span class="d-flex">
                                    <p id="${data[i]._id}" onBlur="getText('${data[i]._id}');">${data[i].title}</p>
                                    <button id="${data[i]._id}" type="button" class="btn btnDelete"><i class="fas fa-backspace"></i></button>
                                </span>`);
        }
        // want to delete task
        $('.btnDelete').click(function(){
            var id = $(this).attr('id');
            $(this).prev().remove();
            $(this).remove();
            deleteById(id);
        })
        // make content can be edited

        $('span').click(function(){
            let id = $(this).children().attr("id");
            $(this).children().attr("contenteditable", "true");
        })

    }).
    catch((err) => {
        console.log(err);
    })
};
loadData();
// add task
$("#btnAddTask").click(() => {
    var title = $("#title").val();
    //var description = $("#description").val();
    $.ajax({
        url: '/todolist',
        type: 'POST',
        data: {
            title: title,
        }
    }).
    then((data) => {
        console.log(data);
        $("#list").append(`<span class="d-flex">
                                <p id="${data._id}" onBlur="getText('${data._id}');">${data.title}</p>
                                <button id="${data._id}" type="button" class="btn btnDelete"><i class="fas fa-backspace"></i></button>
                            </span>`);
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
// update data
function updateById(id, text) {
    
    $.ajax({
        url: '/todolist/' + id,
        type: "PUT",
        data: {
            title: text
        }
    }).
    then(data => {
        console.log(data);
    }).
    catch(err => {console.log(err);})
}
// get text
function getText(id) {
    return $('#' + id).text();
}
//format date
function formatDate(d){
	let day = d.getDate();
	let month = Number(d.getMonth()) + 1;
	let year = d.getFullYear();
	let formatedDate = day + "-" + month + "-" + year;
	return formatedDate;
}
// edit text
function getText(id) {
    var text = $("#" + id).text();
    updateById(id, text);
}