// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
    //param A : root node of tree
    //return a array of integers
    recoverTree: function (A) {
        let curr = A

        let first = -1
        let second = -1
        let prev = -1

        while (curr) {

            if (curr.left == null) {

                if (prev != -1) {
                    if (prev > curr.data) {
                        if (first == -1) {
                            first = prev
                        } else {
                            second = curr.data
                        }
                    }

                }
                prev = curr.data
                curr = curr.right
            } else {
                let t = curr.left

                while (t.right != null && t.right != curr) {
                    t = t.right
                }
                if (t.right == null) {
                    t.right = curr
                    curr = curr.left
                } else {

                    t.right = null


                    if (prev != -1) {
                        if (prev > curr.data) {
                            if (first == -1) {
                                first = prev
                            } else {
                                second = curr.data
                            }
                        }

                    }


                    prev = curr.data
                    curr = curr.right
                }
            }
        }

        return [second, first]
    }
};
