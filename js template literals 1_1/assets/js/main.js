const first = "Jane";
const nachname = "Austen";
const alter = "42";
const geburtsort = "Steventon, Hampshire";
const größe = "157cm";
const gewicht = "55kg";
const hobbys = "poking fun at Regency societal norms";
const lawnGames = "pall mall";
const lieblingsessen = "roast chicken";
const lieblingssport = "reading and walking";
const lieblingsmodemarke = "the Modiste";
const lieblingsjahreszeit = "autumn";
const lieblingsurlaubsort = "Bath";

const ueberJane = "Born into a vicar's family in " + geburtsort + ", " + first + " " + nachname + " lived a short " + alter + " years. Measuring in at " + größe + " and " + gewicht + ", the renowned author wrote many a volume " + hobbys + ". Often her female protagonists are criticized by lesser characters for such pursuits as " + lieblingssport + ". I would surmise that her favourite outdoor pasttime was a game of " + lawnGames + ", and that she preferred " + lieblingsessen + "for Sunday dinner. In keeping with the fashions of the times, most of " + first + "'s clothing was made by " + lieblingsmodemarke + ". Jane would have preferred " + lieblingsjahreszeit + " above other seasons and definitely would have preferred " + lieblingsurlaubsort + " to London.";

console.log(ueberJane);
document.getElementById("output2").innerHTML = ueberJane;

const ueberMich = `Born into a vicar's family in ${geburtsort}, ${first} ${nachname} lived a short ${alter} years. 
Measuring in at ${größe} and ${gewicht}, the renowned author wrote many a volume ${hobbys}. Often her female protagonists are criticized by lesser characters for such pursuits as ${lieblingssport}. I would surmise that her favourite outdoor pasttime was a game of ${lawnGames}, and that she preferred ${lieblingsessen} for Sunday dinner. In keeping with the fashions of the times, most of ${first}'s clothing was made by ${lieblingsmodemarke}. Jane would have preferred ${lieblingsjahreszeit} above other seasons and definitely would have preferred ${lieblingsurlaubsort} to London.`

console.log(ueberMich);
document.getElementById("output").innerHTML = ueberMich;