    $(document).ready(function() {
        $('#taskForm').submit(function(event) {
        event.preventDefault();
        var taskName = $('#taskInput').val();
        if (taskName !== '') {
            $('#taskList').append('<li><span>' + taskName + '</span><span class="close">X</span></li>');
            $('#taskInput').val('');
        }
        });
    
        $(document).on('click', '.close', function() {
        $(this).parent().remove();
        });
    });
    