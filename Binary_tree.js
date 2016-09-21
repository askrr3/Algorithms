this.remove = function(val){
		if(this.root === undefined){
			return false
		}else if(this.root.val == val){
			var current = this.root.left
			var prev;
			while (current.right != null){
				prev = current
				if (current.right){
					current = current.right
				}
			}
			prev.right = current.left
			current.left = this.root.left
			current.right = this.root.right
			this.root = current
		}else{
			var current = this.root
			var prev;
			while (current.val != val){
				prev = current
				if(current.val > val){
					if(current.right){
						current = current.right
					}else{
						return false
					}
				}else{
					if(current.left){
						current = current.left
					}else{
						return false
					}
				}
			}
			while (current.right != null && current.right == null){
				prev = current
				if (current.right){
					current = current.right
				}
			}
			prev.right = current.left
			current.left = this.root.left
			current.right = this.root.right
		}
	}
