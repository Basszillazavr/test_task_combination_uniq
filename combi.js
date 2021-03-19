
const combi = function(candidates, target) {
    let ans = [];
    if(candidates === null || candidates.length === 0) {
        return ans;
    }

    candidates.sort((a, b) => a - b);

    let arr = [];
    findUniq(candidates, target, 0, arr, ans);
    return ans;
};

const findUniq = function(candidates, target, i, arr, ans){
    if(target === 0){
        const temp = arr.slice();
        ans.push(temp);
        return;
    }

    for(let j = i; j < candidates.length; j++){
        if(target < candidates[j]) {
            return;
        }
        arr.push(candidates[j]);
        findUniq(candidates, target - candidates[j], j, arr, ans);
        arr.pop();
    }
};

console.log(combi([2,3,6,7], 7));
console.log(combi([2,3,5], 8));
