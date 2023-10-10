# ToDos-Liste App

* "Shopping"
* "Hausarbeit"
* "Ins Fitnessstudio gehen"

### TODOs App erstellen

#### Funktion erstellen
Gegeben ist das Array `const toDosStore = ["Einkaufen", "Hausarbeit", "Ins Fitnessstudio gehen"]`
##### 1. Element hinzufügen
* Erstelle eine Funktion namens `insertTodo`, die 2 Argumente annimmt, das erste ist ein Array, das zweite ist ein String, die Funktion muss den String zum Array hinzufügen.

Beispiel: `insertTodo(toDoArray, "test"); //fügt "test" in das toDoArray hinzu`

##### 2. Elemente hinzufügen
* Erstelle eine Funktion namens `insertTodosArr`, die 2 Argumente annimmt, beide sind Arrays, die Funktion muss das zweite Array zum ersten hinzufügen.

Beispiel: 
`insertTodosArr(firstArray,["Treffen mit Ghassan", "Neuer Test"]); // fügt "Treffen mit Ghassan" und "Neuer Test" zu firstArray hinzu`

##### 3. Artikel entfernen
* Erstelle eine Funktion namens `removeTodo`, die 2 Argumente benötigt, das erste ist ein Array, das zweite ist eine Zahl, die die Nummer der ToDo-Aufgabe in der Liste darstellt (Beachte, dass diese Zahl nicht mit der Indexnummer übereinstimmt), die Funktion muss eine Aufgabe aus dem Array löschen, die der angegebenen Nummer entspricht.

example: `removeTodo(["Shopping","Hausarbeit"], 1); // löscht "shopping"`

##### 4. Aufgabe bearbeiten
* Erstelle eine Funktion mit dem Namen `editTodo`, um ein beliebiges Element zu bearbeiten.
* die Funktion benötigt 3 Argumente ==> das erste Argument ist das Ziel-Array, das zweite ist der Nummer des Elementes bzw. der Aufgabe und das dritte Argument ist der neue Wert der Aufgabe

Beispiel: `editTodo(["Einkaufen", "Hausarbeit"], 1, "Rechnungen bezahlen"); // ändert "Einkaufen" in "Rechnungen bezahlen"`

##### 5. Elemente bearbeiten
* Erstelle eine Funktion namens `updateTodos`, um Todos zu bearbeiten, indem du ein Array mit den Nummern der Todos übergibst.
* Die Funktion benötigt 3 Argumente ==> das erste Argument ist das Ziel-Array, das zweite ist ein Array mit den Nummern der Elemente und das dritte Argument ist ein Array mit den Werten der neuen Elemente

```javascript
updateTodos(["Einkaufen", "Hausarbeit", "Fernsehen schauen"],
  [2, 3],
  ["Schlafen", "Essen"]
);
// neues Array bzw. neue Liste: ["Einkaufen", "Schlafen", "Essen"]
```

##### 6. Todos-Liste auslesen
* Erstelle eine Funktion namens `RenderToDosListTemplate`.
* Diese Funktion nimmt ein Array als Argument und gibt einen String zurück.
* Wenn das übergebene Array leer ist, sollte sie den String "To do list store is empty" zurückgeben.
* Andernfalls sollte sie einen String in folgendem Format zurückgeben:

```
ToDo-Liste:
 1- Einkaufen
 2- Treffen mit der PR-Abteilung
 3- Rechnungen bezahlen
 4- Milch kaufen
 5- Tommy besuchen
 6- Die Internetverbindung prüfen
 7- Zum Supermarkt gehen
 8- Treffen mit Ghassan
 9- Neuer Test
```

##### Call Stack
```js
insertTodo(toDosStore, "test1");
insertTodo(toDosStore, "test2");
insertTodo(toDosStore, "test4");
insertTodo(toDosStore, "test5");
removeTodo(toDosStore,3);
removeTodo(toDosStore,5);
insertTodo(toDosStore, "Call Alex");
editTodo(toDosStore,3, "Rechnungen bezahlen");
editTodo(toDosStore,5, "Besuch bei Tommy");
insertTodosArr(toDosStore,["Zum Supermarkt gehen", "Mit Ghassan treffen", "Neuer Test"]);

updateTodos(toDosStore,
  [2, 4, 6],
  ["Treffen mit PR-Abteilung", "Milch kaufen", "Internetverbindung prüfen"]
);
```

* Todo-Vorlage rendern
```js
console.log(RenderToDosListTemplate(toDosStore));
// toDosStore ist leer ==> ToDo-Liste ist leer


/* erwartetes Ergebnis im Terminal:
 ToDo-Liste:
 1- Einkaufen
 2- Treffen mit der PR-Abteilung
 3- Rechnungen bezahlen
 4- Milch kaufen
 5- Tommy besuchen
 6- Die Internetverbindung prüfen
 7- Zum Supermarkt gehen
 8- Treffen mit Ghassan
 9- Neuer Test
 */
```
