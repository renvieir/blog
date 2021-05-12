import Head from "next/head";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const questions = [
  {
    id: 1,
    text: "Quando enfrento alguém sobre determinado problema sinto-me bastante constrangido.",
    option: "A",
  },
  {
    id: 2,
    text: "Permaneço calmo e confiante ao defrontar-me com sarcasmo, escárnio ou críticas defensivas.",
    option: "C",
  },
  {
    id: 3,
    text: "Perco a calma facilmente.",
    option: "B",
  },
  {
    id: 4,
    text: "Procuro resolver os problemas diretamente, sem culpar ou julgar os outros.",
    option: "C",
  },
  {
    id: 5,
    text: "Acho certo pedir o que desejo ou expor meus sentimentos.",
    option: "C",
  },
  {
    id: 6,
    text: "Sinto-me a vontade quanto ao grau de contato visual que estabeleço com outras pessoas e creio que elas também sentem o mesmo.",
    option: "C",
  },
  {
    id: 7,
    text: "Sinto-me facilmente constrangido pelo ridículo e sarcasmo.",
    option: "A",
  },
  {
    id: 8,
    text: "É mais importante obter o que desejo do que conquistar a simpatia das pessoas.",
    option: "B",
  },
  {
    id: 9,
    text: "Prefiro mil vezes quando as pessoas advinham meus desejos a ter que dizer-lhes.",
    option: "A",
  },
  {
    id: 10,
    text: "Confio em minha habilidade de resolver satisfatoriamente a maioria das situações de trabalho que envolvem confronto com outras pessoas. ",
    option: "C",
  },
  {
    id: 11,
    text: "Elevarei o tom de voz ou usarei de olhares ofensivos ou sarcasmo para conseguir o que desejo.",
    option: "B",
  },
  {
    id: 12,
    text: "Usarei de sarcasmo ou piadas para afirmar meu ponto de vista.",
    option: "D",
  },
  {
    id: 13,
    text: "Paciência não é o meu forte.",
    option: "B",
  },
  {
    id: 14,
    text: "Conquistar a simpatia das pessoas é o mais importante para mim ainda que algumas vezes precise, para isto, “comprar” sua colaboração. ",
    option: "A",
  },
  {
    id: 15,
    text: "Detesto confrontos e farei tudo que estiver em meu alcance para evita-los.",
    option: "A",
  },
  {
    id: 16,
    text: "Realmente não gosto de confrontos. Usarei, então, de outros meios para manifestar meus sentimentos, tais como observações “cortantes” ou manifestando impaciência. ",
    option: "D",
  },
  {
    id: 17,
    text: "Posso não ser muito direto com as pessoas, mas elas conseguem perceber o que penso a seu respeito só de olhar para mim.",
    option: "D",
  },
  {
    id: 18,
    text: "É fácil, para mim, agredir ou apontar o dedo indicador para outras pessoas.",
    option: "B",
  },
  {
    id: 19,
    text: "Manifesto impaciência em relação aos outros através de expressão corporal, preferencialmente a comunicação verbal. ",
    option: "D",
  },
  {
    id: 20,
    text: "Se for solicitado a fazer algo que não queira ainda assim atenderei ao pedido, mas, propositalmente, não o farei tão bem quanto poderia.",
    option: "D",
  },
];

const initialValues: any = {
  question1: "0",
  question2: "0",
  question3: "0",
  question4: "0",
  question5: "0",
  question6: "0",
  question7: "0",
  question8: "0",
  question9: "0",
  question10: "0",
  question11: "0",
  question12: "0",
  question13: "0",
  question14: "0",
  question15: "0",
  question16: "0",
  question17: "0",
  question18: "0",
  question19: "0",
  question20: "0",
};

const initialScore = {};

const pageMessage = `Dê uma nota a você mesmo, de 0 a 5, para cada resposta, em que 0 = nunca ou muito
diferente de mim e 5 = sempre ou exatamente como eu.`;

export default function Assertividade() {
  const [showResult, setShowResult] = useState(false);
  const [phone, setPhone] = useState("");
  const [score, setScore] =
    useState<{
      A?: number;
      B?: number;
      C?: number;
      D?: number;
    }>(initialScore);
  const formik = useFormik({
    initialValues,
    onSubmit: (values: any) => {
      const result = questions.reduce(
        (newObj: any, { id, option }) =>
          Object.assign(newObj, {
            [option]:
              Number(newObj[option] || 0) + Number(values[`question${id}`]),
          }),
        initialScore
      );
      setScore(result);
      setShowResult(true);
      window.localStorage.setItem(
        "@teste-assertividade/score",
        JSON.stringify(result)
      );
    },
  });

  useEffect(() => {
    const score = JSON.parse(
      `${window.localStorage.getItem("@teste-assertividade/score")}`
    );
    if (score) {
      setScore(score);
      setShowResult(true);
    }
  }, []);
  return (
    <Layout title="Teste de Comunicação Assertiva">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main>
        <Typography variant="h3">Teste de comunicação assertiva</Typography>
        {!showResult && (
          <>
            <Typography variant="subtitle1">{pageMessage}</Typography>
            <form onSubmit={formik.handleSubmit}>
              {questions.map((question) => (
                <FormControl key={`question${question.id}`}>
                  <FormLabel component="legend">
                    <Typography variant="h5">
                      {question.id}. {question.text}
                    </Typography>
                  </FormLabel>
                  <RadioGroup
                    aria-label={`question${question.id}`}
                    name={`question${question.id}`}
                    value={formik.values[`question${question.id}`]}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Nunca ou muito diferente de mim"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="Uma vez ou outra"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio color="primary" />}
                      label="Poucas vezes"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio color="primary" />}
                      label="Muitas vezes"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio color="primary" />}
                      label="Quase sempre"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="primary" />}
                      label="Sempre ou exatamente como eu"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </FormControl>
              ))}
              <Button variant="contained" color="primary" type="submit">
                Enviar
              </Button>
            </form>
          </>
        )}
        {showResult && (
          <>
            <Typography variant="h4">Resultado</Typography>
            <Typography variant="body1">Passivo: {score.A}</Typography>
            <Typography variant="body1">Agressivo: {score.B}</Typography>
            <Typography variant="body1">Assertivo: {score.C}</Typography>
            <Typography variant="body1">
              Passivo/Agressivo: {score.D}
            </Typography>
            <TextField
              focused
              style={{ marginTop: 16 }}
              label="Telefone"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              helperText="Preencha o telefone com DDD"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <Button
              disabled={!phone}
              style={{ marginTop: 16 }}
              variant="contained"
              color="primary"
              onClick={() => {
                const message = `Passivo: ${score.A}. Agressivo: ${score.B}. Assertivo: ${score.C}. Passivo/Agressivo: ${score.D}
                `;
                window.open(
                  `https://api.whatsapp.com/send?phone=+55${phone}&text=${message}`
                );
              }}
            >
              Enviar resultado para o telefone acima
            </Button>
            <Button
              style={{ marginTop: 16 }}
              variant="contained"
              color="primary"
              onClick={() => {
                setShowResult(false);
                setScore(initialScore);
                window.localStorage.removeItem("@teste-assertividade/score");
              }}
            >
              Fazer o teste novamente
            </Button>
            <br />
            <br />
            <Typography variant="h4">Entenda seu resultado</Typography>
            <Typography variant="body1">
              Quanto maior a sua nota em uma das colunas, mais propenso você
              será para apresentar um determinado ESTILO DE COMPORTAMENTO, em
              que:
              <br />
              <br />
              <strong>PASSIVO</strong> – Ansioso por evitar confronto. Evita
              abordagem direta. Abre mão dos seus direitos pelo outro (cede
              facilmente). Muito preocupado com aprovação social. Justificação
              excessiva. Pouco contato visual/atitude defensiva.
              <br />
              <br />
              <strong>AGRESSIVO</strong> – Ansioso por vencer, mesmo à custa do
              outro. Faz abordagens diretas, mas sem tato (habilidade) com o
              outro. Faz valer apenas seus direitos e ignora os do outro.
              <br />
              <br />
              <strong>ASSERTIVO</strong> – Busca defender seus desejos, sem
              ignorar os dos outros. Faz abordagem, direta, mas exprimindo
              respeito pela pessoa. Ouve e procura entender a perspectiva do
              outro. Aceita acordos e soluções integradoras. Expõe claramente
              suas posições, opiniões e sentimentos. Sua autoestima está acima
              se sua preocupação por aprovação social.
              <br />
              <br />
              <strong>PASSIVO/AGRESSIVO</strong> – Apresenta um comportamento
              misto, com elementos de agressividade e passividade. Ansioso por
              acertar as contas sem correr riscos de confronto. Dá respostas
              indiretas/sarcasmos. Mínimo contato visual / postura fechada.
              <br />
              <br />
              <strong>RECOMENDAÇÃO</strong>: É interessante que você solicite a
              outras pessoas que o conhecem bem, que respondam esse teste.
              Outras percepções poderão agregar valor ao seu autoconhecimento e
              a busca por crescimento pessoal. Tenha em mente que o
              comportamento assertivo é aprendido, basta você querer.
              <br />
              <br />O QUE VOCÊ PODE FAZER PARA TER UM COMPORTAMENTO MAIS
              ASSERTIVO?
            </Typography>
          </>
        )}
      </main>
    </Layout>
  );
}
