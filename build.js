const esbuild = require('esbuild');

// Opções de build
const options = {
  entryPoints: ['src/index.js'], 
  bundle: true,
  outfile: 'public/bundle.js', 
};

async function build() {
  try {
    // Executa o build
    await esbuild.build(options);
    console.log('Build concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o build:', error);
    process.exit(1);
  }
}

build();