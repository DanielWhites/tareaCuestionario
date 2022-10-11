const polls = [
    {
      id: 1,
      question: "¿Usted es mayor de edad?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 2,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 5,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 2,
      question: "¿Podrá usted responder unas preguntas sobre nuestros vinos?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 3,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 0,
          finish: true,
          msg: "Ha dado por finalizada nuestra encuesta, gracias por su respuesta",
        },
      ],
    },
    {
      id: 3,
      question: "¿Cúal es el mejor vino?",
      aswer: [
        {
          id: 1,
          response: "VINO MONTES LIMITED",
          election: 4,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "VINO TARAPACA GRAN RESERVA",
          election: 4,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "VINO 7 COLORES GRAN RESERVA",
          election: 4,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "VINO SIEGEL GRAN RESERVA",
          election: 4,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 4,
      question: "¿Con que acompañaría su compra?",
      aswer: [
        {
          id: 1,
          response: "Quesos",
          election: 5,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Carnes Rojas",
          election: 5,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Mariscos",
          election: 5,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Alcachofas",
          election: 5,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Esparragos",
          election: 5,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Carnes Rojas",
          election: 5,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 5,
      question: "Que producto prefiere más?",
      aswer: [
        {
          id: 1,
          response: "Jugos",
          election: 6,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Agua saborisada",
          election: 7,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 6,
      question: "¿De estos productos cúal es su favorito?",
      aswer: [
        {
          id: 1,
          response: "Quesos",
          election: 7,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Carnes Rojas",
          election: 7,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Mariscos",
          election: 7,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Alcachofas",
          election: 7,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Esparragos",
          election: 7,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Carnes Rojas",
          election: 7,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 7,
      question:
        "¿Compraría más seguido sí le damos un 30% en cada compra realizada?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 8,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 0,
          finish: true,
          msg: "Ha dado por finalizada nuestra encuesta, gracias por su respuesta",
        },
      ],
    },
    {
      id: 8,
      question: "¿Le parece que los vegetales son frescos?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 9,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 9,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 9,
      question: "Cúales de los siguientes beneficio le gustaría tener?",
      aswer: [
        {
          id: 1,
          response: "Despacho gratis",
          election: 10,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Trato preferencial",
          election: 10,
          finish: false,
          msg: "Ha dado por finalizada nuestra encuesta, gracias por su respuesta",
        },
      ],
    },
    {
      id: 10,
      question: "¿Nuestra plataforma web y movil le ha gustado?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 11,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 0,
          finish: true,
          msg: "Ha dado por finalizada nuestra encuesta, gracias por su respuesta",
        },
      ],
    },
    {
      id: 11,
      question: "¿Que tan probable es que recomiende nuestra plataforma?",
      aswer: [
        {
          id: 1,
          response: "Muy probable",
          election: 12,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "Lo pensaría",
          election: 12,
          finish: false,
          msg: "",
        },
        {
          id: 3,
          response: "No la recomiendo",
          election: 12,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 12,
      question: "¿Su pedido llegó a tiempo?",
      aswer: [
        {
          id: 1,
          response: "Sí",
          election: 13,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 13,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 13,
      question: "¿El repartidor entregó el pedido segun lo acordado?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 14,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 14,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 14,
      question: "¿El repartidor fue amable?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 15,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 15,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 15,
      question: "¿Sus productos llegarón completamente?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 16,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 16,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 16,
      question:
        "¿El repartirdor se presento de menera educada y le llamó por su nombre?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 17,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 17,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 17,
      question: "¿El repartidor le exigio propina?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 18,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 18,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 18,
      question: "¿Le gustó el regalo que le hicimos en su compra?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 19,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 19,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 19,
      question:
        "¿Sabía usted que la charcutería de la vaca lola tiene cabez y tiene cola?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 20,
          finish: false,
          msg: "",
        },
        {
          id: 2,
          response: "No",
          election: 20,
          finish: false,
          msg: "",
        },
      ],
    },
    {
      id: 20,
      question: "¿Sabía usted que la vaca lola hace muuuuuuu?",
      aswer: [
        {
          id: 1,
          response: "Si",
          election: 100,
          finish: true,
          msg: "Gracias por responder nuestra encuesta",
        },
        {
          id: 2,
          response: "No",
          election: 100,
          finish: true,
          msg: "Gracias por responder nuestra encuesta",
        },
      ],
    },
  ];