/**
 * Created by tan on 16/4/21.
 */
$(function(){
    var $num1=0;var $num2=0;var $status=0;var $check;var $num_s;var $num_ss;
    $(document).on('click','.b',function(){
        if(!isNaN($(this).text())) {
            if($status==0){
                $num1 = parseFloat($(this).text());
                console.log(typeof($num1));
                $("#show").val($num1);
            }
            else if($status==1){
                $num2 = parseFloat($(this).text());
                $("#show").val($num2);
            }
            else if($status==2){
                $num_ss = parseFloat($(this).text());
                if($num2==0){
                    $num1 = parseFloat($num_s + $num_ss);
                    $("#show").val($num1);
                    console.log($num1)
                }
                else {
                    $num2 = parseFloat($num_s + $num_ss);
                    $("#show").val($num2);
                    console.log($num2)
                }
            }
        }
    });
    $("#point").on('click',function(){
        $status = 2;
        $num_s = $("#show").val();
        $num_s = $num_s+".";
        $("#show").val($num_s);
    });
    $("#clear").on('click',function(){
        $num1 = 0;
        $num2 = 0;
        $status = 0;
        $("#show").val("");
    });
    $("#add").on('click',function(){
        $status = 1;
        $check = 1;
    });
    $("#sub").on('click',function(){
        $status = 1;
        $check = 2;
    });
    $("#mul").on('click',function(){
        $status = 1;
        $check = 3;
    });
    $("#div").on('click',function(){
        $status = 1;
        $check = 4;
    });
    $("#equ").on('click',function(){
        if($check==1){
            var $result = $num1+$num2;
            $("#show").val($result);
            $status = 0;
        }
        else if($check==2){
            var $result = $num1-$num2;
            $("#show").val($result);
            $status = 0;
        }
        else if($check==3){
            var $result = $num1*$num2;
            $("#show").val($result);
            $status = 0;
        }
        else if($check==4){
            var $result = $num1/$num2;
            $("#show").val($result);
            $status = 0;
        }
    });
});