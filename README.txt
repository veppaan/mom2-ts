Detta är Moment 2 i Programmering i TypeScript

Gjord av Vera Kippel veki2400

Jag har följt uppgiftsbeskrivningen där jag skapat interface, klass och funktioner.

Interface innehåller task, completed och priority.

Index.html innnehåller ett formulär och en lista med skapade att-göra uppgifter.

Funktioner:
addTodo - kollar värden för att lägga till en ny att-göra
markTodoCompleted kollar om en uppgift har markerats som avklarad
getTodods - hämtar alla sparade att-göra uppgifter
saveToLocalStorage - sparar till localStorage
loadFromLocalStorge - Läser in från localStorage
renderTodo - hämtar och renderar alla to-dos i lista
markCompleted - anropar markTodoCompleted med ett index 

Submit-knapp i formuläret har en eventlyssnare som kollar inmatning och anropar addTodo och renderTodo för att få in upppgiften till listan.

DOM hanteras i index.html då den insta skulle vara i klass-filen