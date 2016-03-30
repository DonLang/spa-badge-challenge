document.addEventListener('DOMContentLoaded', function () {
  MiniQuery("body").ajax({
    url:'http://spa-badge-api.herokuapp.com/teachers',
    type: 'get'}).then(function(response){var teachers = {teachers: JSON.parse(response)
    };
    teachersList(teachers)});
    function teachersList(list){
      console.log(list)


    var theTemplateScript = MiniQuery("#teacher-list").innerHTML;

    var theTemplate = Handlebars.compile(theTemplateScript);

    var theCompiledHtml = theTemplate(list);

    MiniQuery('.content-placeholder').innerHTML = (theCompiledHtml);

    }
});
