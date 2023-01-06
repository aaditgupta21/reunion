<br>
<br>

# Our FRQS

<div id="title">
{% include nav2.html %}
</div>

# Array/Arraylist 

<body>
<style>
    h1{
    text-align: center;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .container{
    margin: auto;
    width: 25%;
    padding: 10px;
    border: 1px solid #f2f2f2;
    -webkit-box-shadow: 1px 1px 4px 0px rgba(176,176,176,1);
       -moz-box-shadow: 1px 1px 4px 0px rgba(176,176,176,1);
            box-shadow: 1px 1px 4px 0px rgba(176,176,176,1);
    background-color: #fff;
    background-color: #F8F8F8;
  }
  .header{
    background-color: #81C784;
    padding: 10px;
    color: #fff;
    text-align: center;
  }
  .result{
    font-size: 24px;
    padding: 24px 5px;
    font-weight: 700;
    text-align: right;
    width: 70%;
    border: none;
    background-color: #F8F8F8;
  }
  .first-row,
  .second-row,
  .third-row,
  .conflict
  {
    display: inline-block;
    width: 100%;
  }
  .box{
   padding: 15px;
   font-weight: bold;
   font-size: 16px;
   border: none;
   border-radius: 3px;
   background-color: #F2F2F2;
   float: left;
   margin: auto;
   /*border: 1px solid #000;*/
  }
  .conflict .left,
  .conflict .right{
    float: left;
    position: relative;
  }
  .left{
    width: 74%;
  }
  .right{
    width: 24%;
  }
  .big{
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 3px;
    background-color: #F2F2F2;
    float: left;
    width: 64.5%;
  }
  .small{
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 3px;
    background-color: #F2F2F2;
    float: left;
    width: 31.5%;
    margin: 0 2px;
  }
  .plus{
    height: 105px;
    width: 100%;
  }
  .green{
    background-color: #81C784;
  }
  .red{
    background-color: #F50258
  }
  .grey{
    background-color: #F2F2F2;
  }
  .white-text{
    color: #fff;
  }
  .top-margin{
    margin-top: 4px;
  }
</style>
        <th:block layout:fragment="body" th:remove="tag">
            <h1>Calculator Design Using HTML Layout</h1>
            <form action="/calculator" method="GET" id="calcForm">
                <table style="height:100%" id="calcu" class="container">
                    <tr>
                        <td><input style="width: 90%" type="text" class="result" name="input" id="calcForm1" th:value="${output}"><input style="width: 10% ; height: 75px" type="button" value="c" onclick="clr()" /> </td>
                    </tr>
                    <tr class ="first-row">
                        <!-- create button and assign value to each button -->
                        <!-- dis("1") will call function dis to display value -->
                        <td style="padding: 1px"><input style="width: 100px; height:100px" type="button" value="1" onclick="dis('1')" class= "box" name=""
                                    onkeydown="myFunction(event)"></td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px" type="button" value="2" onclick="dis('2')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px" type="button" value="3" onclick="dis('3')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px" type="button" value="/" onclick="dis('/')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                    </tr>
                    <tr class ="second-row">
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="button" value="4" onclick="dis('4')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="button" value="5" onclick="dis('5')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="button" value="6" onclick="dis('6')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px" type="button" value="*" onclick="dis('*')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                    </tr>
                    <tr class ="third-row">
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="button" value="7" onclick="dis('7')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="button" value="8" onclick="dis('8')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="button" value="9" onclick="dis('9')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                    </tr>
                    <tr class = "conflict">
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="button" value="0" onclick="dis('0')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="button" value="." onclick="dis('.')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                        <!-- solve function call function solve to evaluate value -->
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="submit" name="" value="=" class=" green white-text big"> </td>
                        <td style="padding: 1px"><input style="width: 100px; height:100px"  type="button" value="+" onclick="dis('+')" class= "box" name=""
                                    onkeydown="myFunction(event)"> </td>
                    </tr>
                </table>
            </form>
            <script>
                // Function that display value
                function dis(val) {
                    document.getElementById("calcForm1").value += val;
                    varvar = document.getElementById("calcForm1").value;
                    console.log("varvar");
                }
                function myFunction(event) {
                    if (event.key == '0' || event.key == '1' 
                        || event.key == '2' || event.key == '3'
                        || event.key == '4' || event.key == '5' 
                        || event.key == '6' || event.key == '7'
                        || event.key == '8' || event.key == '9' 
                        || event.key == '+' || event.key == '-'
                        || event.key == '*' || event.key == '/')
                        document.getElementById("calcForm1").value += event.key;
                }
          var cal = document.getElementById("calcu");
                cal.onkeyup = function (event) {
                    if (event.keyCode === 13) {
                        console.log("Enter");
                        let x = document.getElementById("calcForm1").value
                        console.log(x);
                    }
                }
          // Function that clear the display
                function clr() {
                    document.getElementById("calcForm1").value = ""
                }
            </script>
        </th:block>
    </body>