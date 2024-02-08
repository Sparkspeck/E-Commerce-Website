var angularJsScriptTag = document.createElement('script');

angularJsScriptTag.src = "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.js";

document.head.appendChild(angularJsScriptTag);

var app=angular.module("myApp",[]);
app.controller("Ctrl",function($scope){
    $scope.total=24;
    $scope.cartItems=[];
    $scope.qty=1;
    $scope.addedItems=[];
    $scope.recompPrice=[];
    $scope.subtotal=0;
    $scope.total=false;

    
    $scope.recompPrice.push($scope.totalPrice);
    
        $scope.addToCart=function(itemName){
            var tag=document.getElementById(itemName);
            console.log(itemName);
            var mainDiv = tag.getElementsByClassName("pro");
            var imgTag=mainDiv[0].getElementsByTagName("img");
            var imgSource=imgTag[0].src;
            var nameTag = mainDiv[0].getElementsByTagName("h5")[0].innerHTML;
            var priceTag = mainDiv[0].getElementsByTagName("h4")[0].innerHTML.replace('$','');
            var priceTagFinal=parseInt(priceTag);
    
            if($scope.addedItems.indexOf(nameTag)==-1){
                var details={
                    'IMG':imgSource,
                    'NAME':nameTag,
                    'PRICE':priceTagFinal,
                    'QTY':1
                };
                                
                $scope.cartItems.push(details);
                $scope.addedItems.push(nameTag);
            }
                
        }
        
        $scope.computeTotal=function(){
            $scope.total=true;
            $scope.subtotal=0;
            for(let i=0;i<$scope.cartItems.length;i++){
                $scope.subtotal=$scope.subtotal+($scope.cartItems[i].PRICE*$scope.cartItems[i].QTY);
            }
           
        }

        $scope.removeItem=function(item){
            var index=$scope.cartItems.indexOf(item);
            var index1=$scope.addedItems.indexOf(item);
            $scope.cartItems.splice(index,1);
            $scope.addedItems.splice(index1,1);
        }
        
        
})

