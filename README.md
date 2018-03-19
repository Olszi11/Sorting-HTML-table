# Sorting-HTML-table


Link to project: https://olszi11.github.io/Sorting-HTML-table/
Logika działania:

1. Definicje odpowiednich zmiennych:

- table - tabela z danymi,
- rows - wiersze ‘tr’ tabeli,
- switching - zmienna w pętli while (pętla, która wykonuje się dopóki jej warunek jest prawdziwy),
- shouldSwitch - zmienna od której zależy czy wiersze tabeli będą zamieniane,
- dir - zmienna określająca kierunek sortowania (asc - ascending(rosnąco),
desc - descending(malejąco)),
- switchCount – wartość określająca ilość zamian wierszy.

2. Proces sortowania: 

Sortowanie odbywa się poprzez porównywanie odpowiednich komórek (wartość pola komórki ‘td’ z wiersza ‘i’ jest porównywana z wartością pola komórki ‘td’ z wiersza ‘i+1’)
- dopóki wartość zmiennej switching jest ustawiona na ‘true’ i zmienna ‘i’ w pętli for jest mniejsza od ilości wierszy tabeli pomniejszonej o wartość 1 to elementy są ze sobą porównywane,
- jeżeli shouldSwitch ma wartość ‘true’ to elementy są zamieniane, jeżeli ‘false’ wówczas sprawdzana jest kolejna para elementów tabeli,
- w momencie, gdy posortowana została cała tabela, zmienna shouldSwitch jest ustawiana na ‘false’, zmienna switching  również na ‘false’, po czym następuje przerwanie pętli while. Oznacza to, że proces sortowania w jednym z kierunków zakończył się.

Ponowne kliknięcie odpowiedniego nagłówku tabeli powoduje zamianę wartości dir na wartość przeciwną i ustawienia wartości switching na ‘true’. Następuje rozpoczęcie sortowania w drugą stronę.
