function node(data){
    return {
        data,
        left : null,
        right : null
    }
}

function tree(array){
    let sortedArray =  array.slice().sort((a,b)=> a-b )
    let cleanedArray  = [...new Set(sortedArray)]

    let root = buildTree(cleanedArray,0,cleanedArray.length-1)
    return {
        root
    }
}


function buildTree(array, start, end){
    if (start > end) return null;
    let mid = start + Math.floor((end-start)/2)
    
    let root = node(array[mid])

    root.left = buildTree(array, start, mid-1)
    root.right = buildTree(array, mid+1, end )
  
    return root
}


const  insert = (root, value) => {
    if (root === null)  return root = node(value);
    if (root.data === value) return  root;

    if (value < root.data){
        root.left = insert(root.left, value )
    } else if (value > root.data){
        root.right =  insert(root.right, value )
    }
    return root 

}


const  deleteItem = (root, value) => {
    if (root === null)  return
    if (root.data === value) {
        console.log("encontre la wea " )
       return root.data = null
        
    }else if (value < root.data){
        console.log("la wea esta a la izquierda " )
        root.left = deleteItem(root.left, value )
    }else if (value > root.data){
        console.log("la wea esta a la derecha " )
        root.right = deleteItem(root.right, value )
    }
    return root
}

//display the tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };




let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let  tripio = tree(testArray)
tripio.root = insert(tripio.root, 29)
tripio.root = insert(tripio.root, 2)
tripio.root = insert(tripio.root, 4)
prettyPrint(tripio.root)
tripio.root = deleteItem(tripio.root, 2)
prettyPrint(tripio.root)
