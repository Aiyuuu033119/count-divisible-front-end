$(document).ready(function () {
    
    $('.getResult').on('click', function (e) {
        e.preventDefault();

        var x = $('.x').val();
        var y = $('.y').val();
        var p = $('.p').val();

        var data = new FormData();

        var hasError;

        if (x == '' && y == '' && p == '') {
            $('.x').attr('style', 'border:1px solid #ff3737');
            $('.y').attr('style', 'border:1px solid #ff3737');
            $('.p').attr('style', 'border:1px solid #ff3737');
            $('.x').val('');
            $('.y').val('');
            $('.p').val('');
            $('.x').attr('placeholder','Empty Input');
            $('.y').attr('placeholder','Empty Input');
            $('.p').attr('placeholder','Empty Input');
            hasError = true;
        } else {

            if ($.isNumeric(x)==false) {
                $('.x').attr('style', 'border:1px solid #ff3737');
                $('.x').val('');
                $('.x').attr('placeholder','Invalid Input');
                hasError = true;
            }
            if ($.isNumeric(y)==false) {
                $('.y').attr('style', 'border:1px solid #ff3737');
                $('.y').val('');
                $('.y').attr('placeholder','Invalid Input');
                hasError = true;
            }
            if ($.isNumeric(p)==false) {
                $('.p').attr('style', 'border:1px solid #ff3737');
                $('.p').val('');
                $('.p').attr('placeholder','Invalid Input');
                hasError = true;
            }else{
                $('.x').attr('style', 'border:1px solid rgb(161, 161, 161)');
                $('.y').attr('style', 'border:1px solid rgb(161, 161, 161)');
                $('.p').attr('style', 'border:1px solid rgb(161, 161, 161)');
                hasError = false;
            }
            
            
        }

        if (x == '') {
            $('.x').attr('style', 'border:1px solid #ff3737');
            $('.x').val('');
            $('.x').attr('placeholder','Empty Input');
            hasError = true;
        }
        if (y == '') {
            $('.y').attr('style', 'border:1px solid #ff3737');
            $('.y').val('');
            $('.y').attr('placeholder','Empty Input');
            hasError = true;
        }
        if (p == '') {
            $('.p').attr('style', 'border:1px solid #ff3737');
            $('.p').val('');
            $('.p').attr('placeholder','Empty Input');
            hasError = true;
        }

        if (hasError == false) {
            $('.result').text('');
            $('.loader-container').html('<div class="loader11"></div>');
            $.ajax({
                url: "https://count-divisible.herokuapp.com/index.php?x="+x+"&y="+y+"&p="+p,
                data: data,
                type: "POST",
                contentType: false,
                processData: false,
                success: function (data) {

                    var json = JSON.parse(data);
                    $('.loader-container').html('');
                    $('.result').text(Math.round(json));
                }
            });
        }
    });

});