// Block Scope
if (true) {
  let blockScopeVariable = "I am a Variable with Block Scope";
  console.log(blockScopeVariable);
}

// Funciton Scope

function myfunction() {
  var functionScopeVariable = "I am a Variable with function Scope";
  console.log(functionScopeVariable);

  function add() {
    console.log(functionScopeVariable);
  }
  add();
}
myfunction();
