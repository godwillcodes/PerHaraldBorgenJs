'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];

}

function aVeryBigSum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;

}

function diagonalDifference(arr) {
    let primary = 0;
    let secondary = 0;
    for (let i = 0; i < arr.length; i++) {
        primary += arr[i][i];
        secondary += arr[i][arr.length - 1 - i];
    }
    return Math.abs(primary - secondary);

}

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    console.log(positive / arr.length);
    console.log(negative / arr.length);
    console.log(zero / arr.length);


}


function decryptPassword(s) {
    let password = '';
    let numbers = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0' || s[i] === '1' || s[i] === '2' || s[i] === '3' || s[i] === '4' || s[i] === '5' || s[i] === '6' || s[i] === '7' || s[i] === '8' || s[i] === '9') {
            numbers.push(s[i]);
        } else if (s[i] === '*') {
            password = password.slice(0, password.length - 1);
        } else if (s[i] === '#') {
            password += numbers.pop();
        } else {
            password += s[i];
        }
    }
    return password;

}

function getMinCost(crew_id, job_id) {
    // Write your code here
    let cost = 0;
    crew_id.sort();
    job_id.sort();
    for (let i = 0; i < crew_id.length; i++) {
        cost += Math.abs(crew_id[i] - job_id[i]);
    }
    return cost;


}

function getMaxArea(w, h, isVertical, distance) {
    // Write your code here
    let maxArea = 0;
    let vertical = [];
    let horizontal = [];
    for (let i = 0; i < isVertical.length; i++) {
        if (isVertical[i]) {
            vertical.push(distance[i]);
        } else {
            horizontal.push(distance[i]);
        }
    }
    vertical.push(0);
    vertical.push(w);
    horizontal.push(0);
    horizontal.push(h);
    vertical.sort();
    horizontal.sort();
    let maxVertical = 0;
    let maxHorizontal = 0;
    for (let i = 0; i < vertical.length - 1; i++) {
        maxVertical = Math.max(maxVertical, vertical[i + 1] - vertical[i]);
    }
    for (let i = 0; i < horizontal.length - 1; i++) {
        maxHorizontal = Math.max(maxHorizontal, horizontal[i + 1] - horizontal[i]);
    }
    return maxVertical * maxHorizontal;


}

function minOperations(arr, threshold, d) {
    // Write your code here
    let operations = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            arr[i] -= d;
            operations++;
            i--;
        }
    }
    return operations;


}