import { v4 } from 'uuid';
import translate from 'translate';



output.innerHTML = `
<p>Seu ID é ${v4()}.</p>
`;

translate.engine = 'libre';
translate.from = 'pt';
translate.to = 'en';
translate.key = 'SUA_CHAVE_API_AQUI';

output2.innerHTML = `
<p>
    <input type="text" id="original" />
    <button id="traduzir">Traduzir</button>
</p>
<p id="traduzida"></p>
`;

traduzir.onclick = () => {
    translate(original.value).then((t) => traduzida.innerHTML = t);
};