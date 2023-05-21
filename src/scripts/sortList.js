import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// project 12, use jQuery instead JavaScript
$(function () {
    const $generateBtn = $('#generateBtn');
    const $sortBtn = $('#sortBtn');
    const $resetBtn = $('#resetBtn');

    $('form').on('submit', function (event) {
        event.preventDefault();
        const listSize = parseInt($('#listSize').val(), 10);
        if (isNaN(listSize) || listSize < 1) {
            alert('Please enter a valid list size greater than 0.');
            return;
        }

        const numberList = generateNumberList(listSize);
        printNumberList(numberList, '#numberList');
        $sortBtn.prop('disabled', false);
        $resetBtn.prop('disabled', false);
    });

    $('#sortBtn').on('click', function () {
        const numberList = Array.from($('#numberList li')).map(li => parseInt($(li).text(), 10));
        const sortedList = bubbleSortOptimized(numberList);
        // const sortedList = numberList.sort((a, b) => a - b);
        printNumberList(sortedList, '#sortedList');
    });

    $('#resetBtn').on('click', function () {
        $('#listSize').val('');
        $('#numberList').empty();
        $('#sortedList').empty();
        $sortBtn.prop('disabled', true);
        $resetBtn.prop('disabled', true);
    });

    function generateNumberList(size) {
        const numberList = [];
        for (let i = 0; i < size; i++) {
            const randomNumber = Math.floor(Math.random() * 1000);
            numberList.push(randomNumber);
        }
        return numberList;
    }

    function printNumberList(numberList, listId) {
        const $listContainer = $(listId);
        $listContainer.empty();
        numberList.forEach(function (number) {
            const $listItem = $('<li>').text(number);
            $listContainer.append($listItem);
        });
    }
    //   project 13, add sort algorithm in personal website
    function bubbleSortOptimized(arr) {
        let len = arr.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < len - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
            len--;
        } while (swapped);
        return arr;
    }
});

