const number = Number(prompt('몇 명이 참가하나요?'));
        const $button = document.querySelector('button');
        const $input = document.querySelector('input');
        const $word = document.querySelector('#word');3
        const $order = document.querySelector('#order');
        let word;
        let newWord;
        
        const onClickButton = () => {
            if(!word) {
                word = newWord;
                $word.textContent = word;
                $input.value = '';
                const order = Number($order.textContent);
                if (order === number) {
                    $order.textContent = 1;
                } else {
                    $order.textContent = order + 1;
                }
                $input.focus();
            } else {
                if (word[word.length-1] === newWord[0]) {
                   
                    word = newWord; 
                    $word.textContent = word;
                    $input.value = '';
                    const order = Number($order.textContent);
                    if (order === number) {
                    $order.textContent = 1;
                    } else {
                        $order.textContent = order + 1;
                    }
                    $input.focus();
                } else {
                    alert('오답')
                    $input.value = '';
                    $input.focus();
                }
            }
        };

        const onInput = (event) => {
            newWord = event.target.value;
        };

        $button.addEventListener('click', onClickButton);
        $input.addEventListener('input', onInput);