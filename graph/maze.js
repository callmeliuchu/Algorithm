const print = (obj) => {
	console.log(obj);
}

class Maze{
	constructor(m,n){
		this.m = m;
		this.n = n;
		this.visited = []
		this.bluePrint = []
	}
	initGraph(m,n){
	          this.graph = []
	          for(let i=0;i<this.m;i++){
	          	    let vec = []
	          	    for(let j=0;j<this.n;j++){
	          	    	vec.push(0);
	          	    	this.visited[i+"_"+j] = false;
	          	    }
	          	    this.graph.push(vec);
	          }
	}
	getAroundArr(x,y){
	      let arr = [[x-1,y],[x+1,y],[x,y-1],[x,y+1]];
	      let retArr = [];
	      for(let vec of arr){
	      	if(this.isNext(vec[0],vec[1])){
	      		retArr.push(vec);
	      	}
	      }
	      return retArr;
	}
	isLegal(x,y){
	      return (x>=0 && x<=this.n-1) && (y>=0 && y<=this.m-1)
	}
	isNext(x,y){
	     return !this.visited[x+"_"+y] &&  this.isLegal(x,y)
	}
	dfs(x,y){
		for(let i=0;i<this.n;i++){
			for(let j=0;j<this.m;j++){
				if(this.isNext(i,j)){
					this.dfs_1(i,j)
				}
			}
		}
	}
	dfs_1(x,y){
		this.visited[x+"_"+y] = true;
		this.bluePrint.push([x,y])
		let nextArr = this.getAroundArr(x,y);
		if(nextArr.length == 0){
			return;
		}
		let next = nextArr[Math.floor(nextArr.length*Math.random())]
		let x_1 = next[0];
		let y_1 = next[1];
		this.dfs_1(x_1,y_1);
	}
}

// let maze = new Maze(6,6)
// maze.dfs(0,0)
// print(maze.bluePrint)