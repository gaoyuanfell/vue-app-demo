import Vue from 'vue';

const state = {
    notes: {
        0: [],
        1: []
    },
    doubleBet: {
        0: [],
        1: []
    },
    notesList: []
}

const getters = {
    getNotes: state => {
        return state.notes
    },
    getNotesList: state => {
        return state.notesList
    },
    //获取注数 注数计算
    getBetLength: state => {
        let box = state.notesList;
        if (box.length > 0) {
            let sum = 0;
            for (let i = 0; i < box.length; i++) {
                let r = box[i][0].length;
                let b = box[i][1].length;
                sum += getBet(b, r);
            }
            return sum
        }
        return 0
    },
    getDoubleBet: state => {
        return state.doubleBet
    },
    getDoubleBetLength: state => {
        let r = state.doubleBet[0].length;
        let b = state.doubleBet[1].length;
        if (r >= 6 && b >= 1) {
            return getBet(b, r);
        }
        return 0;
    }
}

const actions = {

}

const mutations = {
    //改变随机的注数
    changeNotes(state) {
        state.notes[0].length = 0;
        state.notes[1].length = 0;
        getNotes('red', 34, state);
        getNotes('blue', 17, state);
    },
    //增加注数
    addNotesList(state, bet) {
        state.notesList.push(bet)
    },
    //移除注数
    removeNotesList(state, index) {
        state.notesList.splice(index, 1);
    },
    updateNotesList(state, data) {
        let l = data.$index;
        let bet = data.bet;
        state.notesList.splice(l, 1, bet);
    },
    updateDoubleBet(state, data) {
        state.doubleBet = data;
    },
    distroyNotesList(state) {
        state.notesList = [];
    },
    //机选投注
    addBetForRobot(state) {
        let arr1 = [];
        let arr2 = [];
        for (let j = 0; j < 6; j++) {
            let _num = Math.floor(Math.random() * 33) + 1;
            while (arr1.indexOf(_num) != -1) {
                _num = Math.floor(Math.random() * 33) + 1;
            }
            arr1.push(_num);
        }
        arr1 = arr1.sort((a, b) => {
            return a - b
        })
        let _num = Math.floor(Math.random() * 16) + 1;
        arr2.push(_num);
        state.notesList.push({
            0: arr1,
            1: arr2
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

/**
 * 获取随机双色球号
 */
function getNotes(ele, count, state) {
    let Num = document.querySelector('#index_number_box');
    let box = Num.querySelectorAll(`.${ele}`);
    let arrBall = [];
    let i = 0;
    let timer = 10;
    let isRed = ele == 'red';
    for (let i = 1; i < count; i++) {
        arrBall.push(i);
    }
    arrBall.sort(function () {
        return (Math.random() < 0.5 ? 1 : -1)
    });

    function setNum() {
        for (let j = 0; j < box.length; j++) {
            box[j].innerHTML = arrBall[Math.floor(Math.random() * (count - 1))]
        }
        i++;
        if (i > count + 16) {
            arrBall.sort(function () {
                return (Math.random() < 0.5 ? 1 : -1)
            });
            for (let j = 0; j < box.length; j++) {
                let num = arrBall[j];
                if (isRed) {
                    state.notes[0].push(num)
                } else {
                    state.notes[1].push(num)
                }
                box[j].innerHTML = num;
            }
            isRed && (state.notes[0] = state.notes[0].sort((a, b) => {
                return a - b
            }));
            return;
        }
        setTimeout(setNum, timer);
    }
    setNum();
}

/**
 * 计算注数 b：篮球数 r：红球数
 */
function getBet(b, r) {
    function factorial(n, m) {
        return (n < m) ? 1 : n * factorial(n - 1, m);
    }
    let sum = factorial(r, r - 5) || 0;
    let c = factorial(6, 1) || 1;
    return sum / c * b
}