   /*2. Pide una nota (número). Muestra la calificación según la nota:
	0-3: Muy deficiente
	3-5: Insuficiente
	5-6: Suficiente
	6-7: Bien
	7-9: Notable
    9-10: Sobresaliente*/
    
    nota = prompt("por favor ingrese su nota ")

    if (nota >= 0 && nota <= 3)
    {
        alert("Calificacion: Muy deficiente")
    }     
    else if(nota >= 3 && nota <= 5)
    {
      alert("Calificacion: Insuficiente")
    }
    else if(nota >= 5 && nota <= 6)
    {
      alert("Calificacion: Suficiente")
    }
    else if(nota >= 6 && nota <= 7)
    {
      alert("Calificacion:Bien")
    }
    else if(nota >= 7 && nota <= 9)
    {
      alert("Calificacion: Notable")
    }
    else if(nota >= 9 && nota <= 10)
    {
      alert("Calificacion: Sobresaliente")
    }
    else
    {
        alert("Por favor ingrese un valor numerico de 1 a 10")
    }