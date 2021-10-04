const btnJob = document.getElementById('btn-job');

btnJob.addEventListener('click', applyToJob);

const candidat = {
  isProgrammer: true,
  isCool: true,
};

function applyToJob() {
  console.log('Recruteur - La décision est en cours...');
  startDecisionProcess()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log('err', err);
    });
}

function startDecisionProcess() {
  return new Promise((resolve, reject) => {
    console.log("Recruteur - Pendant ce temps je reçois d'autres candidats");
    setTimeout(() => {
      if (candidat.isProgrammer && candidat.isCool) {
        resolve('Recruteur - Bienvenue dans notre entreprise !');
      } else {
        reject(
          `Recruteur - Malgré tout l'intérêt de votre candidatur, nous somme au regret de bla bla`
        );
      }
    }, 2000);
  });
}

console.log('Après la fonction applyToJob');
console.log(`Je réponds à d'autres annonces`);
