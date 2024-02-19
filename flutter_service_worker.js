'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e6759a5306828df2468b4cad66bbd208",
"index.html": "ee3ca42ecf15af1c480dbe64837b822e",
"/": "ee3ca42ecf15af1c480dbe64837b822e",
"main.dart.js": "7304d89d86b45236ff165da3527e271e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "49e793aca7ff8113d99dd827f8f8b204",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2e1293180b6130140abd32e22255b7fa",
"assets/AssetManifest.json": "0a04715e9635e6e3f526910d82d27693",
"assets/NOTICES": "795e21eb3a286e852e723f199072d495",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "81dd7c287c7625ce777fae73ae1b6609",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f771affe17b8b10f025e5a20d13d37ca",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "536dc2d7ca7495dcf9c50dd7aaa85cdc",
"assets/fonts/MaterialIcons-Regular.otf": "52fb6dd7eb39cdd818bd956d9e21fef3",
"assets/assets/images/ic_coleta.svg": "a33d65476147df2be5e8ff3db97b9eff",
"assets/assets/images/catalogo.png": "5b06eb1673b170e9b9216c58f323507c",
"assets/assets/images/termocomercialIcon.png": "589318bd8d67db23f6984ba5f717ab12",
"assets/assets/images/computador-cor.png": "11433d0140d74b6886dc3d480d5d9f2d",
"assets/assets/images/mapa-pa.png": "eef202122a5c3c7390c2bc8ee3e00539",
"assets/assets/images/caixa.png": "3c19a69c19e0454b18939b2ba6821bb2",
"assets/assets/images/globo.svg": "c1e71e0f2d5f0549da9f2a792426c64d",
"assets/assets/images/header-ouro.png": "4febd39115464d550ae28b8bcb7fadf1",
"assets/assets/images/youtube-cor.png": "1eb8fda4cbfb17ea13d834dc42496a1d",
"assets/assets/images/marca_correios_base.png": "f4e2cb8d782542e721bc8ae26165d10d",
"assets/assets/images/receber-encomenda-outline-stroke.png": "17b9aa37e44f3959925a981fd58cc34f",
"assets/assets/images/ic_logo_correios.png": "95d96bfd1ecb68e43e5945cea8df15b6",
"assets/assets/images/mapa-pb.png": "593557aa7ef2e56995e2c7bf6cd00317",
"assets/assets/images/caminhao-lupa-outline-stroke-amarelo.png": "30922decd490cfea5e599f473870f108",
"assets/assets/images/mapa-rj.png": "6a923427cd0462726b487f34ea628ebb",
"assets/assets/images/visto-cor.png": "10bc5a60100a08b2a48e220d4cccd6a8",
"assets/assets/images/ic_link.svg": "5e4576cd67a507696aa5198d6f7cb3fa",
"assets/assets/images/ic_excluir.png": "559673c69f5006a465515741e1f3f2ea",
"assets/assets/images/caminhao-lupa-visto-outline-stroke.png": "e19f94a80f27a7c31a4be7455e855781",
"assets/assets/images/endereco.svg": "e8744c90e4c67cdb1e11cd3ab3124457",
"assets/assets/images/termointernacionalIcon.png": "b9a526b017a9cb8e784d274f370fbd46",
"assets/assets/images/ic_pix.svg": "1ab44fbbcbf68995f444ca8b0a29a152",
"assets/assets/images/caminhao-lupa-visto-outline-stroke-amarelo.png": "4642162290237720b7b7f2830da8d202",
"assets/assets/images/ic_logo_correios_blackfriday.png": "6d6845c8aa60aabd2c3559ac09a8165e",
"assets/assets/images/mapa-df.png": "42b0f9acf4079488c8c9e8d2aadc252e",
"assets/assets/images/mapa-brasil.png": "aff24c5cb56bafce7a397bd1568d21fa",
"assets/assets/images/iphonex.png": "b12b84b6f6951d714f12c7015de8b85b",
"assets/assets/images/suspender.png": "ded4d09d9e226b7a495179b35f4a93f4",
"assets/assets/images/mapa-ro.png": "4f89281b9d1048bc5b2641550b6245a7",
"assets/assets/images/ic_rastreamento.svg": "13792a466d7211f925b261d702c3a007",
"assets/assets/images/carrinho-cor.png": "b138fc319521f41029f1d18f800222e3",
"assets/assets/images/ic_troca_contrato.png": "adc1a4646f0e5a18f7c439c13f945744",
"assets/assets/images/marca_correios_base_web.png": "8a5d4f653b4fe04a96cd8080258c08e4",
"assets/assets/images/envelope.png": "f8a25f7c939c21fa479bcf6890b10868",
"assets/assets/images/notebook-dev-cor.png": "bf7969dd9d198f0dcb522a533f2baa96",
"assets/assets/images/fatura.png": "df9b832f2dd472d624eee251676ac153",
"assets/assets/images/megafone.png": "e37297a35694ce6a92ec6908fb44aaad",
"assets/assets/images/ic_impressora.svg": "449ae9de4804cbb8c604880adb969bb0",
"assets/assets/images/mapa-rn.png": "de0521351e9459b966c60769df604f51",
"assets/assets/images/ic_pacote_ouro.png": "d798703701eba0fac52dfeda2340e046",
"assets/assets/images/ic_visto_circulo.svg": "fc1966ffda4d5d2ebf8b60b8ac89a658",
"assets/assets/images/caixa-aberta-cor.png": "0e154aabf1861fadef42cdefa6c766d5",
"assets/assets/images/ic_contrato.svg": "41a77711fab7aa485b5e172e49f0212d",
"assets/assets/images/mapa-go.png": "cec056e29bf3429623913fd791d3cb8b",
"assets/assets/images/ic_perguntas_frequentes.png": "4e903a652e5e486ce372179a8fdb7963",
"assets/assets/images/precos-prazos-cor.png": "d363f5de6f55f9e78a29d9f4f65f1741",
"assets/assets/images/contato.svg": "f1b8e2cb58fe1c708e0edbc271c3d127",
"assets/assets/images/ic-cancelar-contrato.png": "0879a9545471b4bc66a40934ff8d4eb0",
"assets/assets/images/postado-encomenda-outlone-stroke-amarelo.png": "30423ce527cf3abb7a26f1e6608ab680",
"assets/assets/images/carol.png": "71d108791e9183ad7007865cd670b974",
"assets/assets/images/header-platinum.png": "d2256fabeec5b321ef37583f914c199d",
"assets/assets/images/ic_pacote_bronze.png": "44c06d92d0d2484f465aa12e15d807c9",
"assets/assets/images/ic_circulo_pendente.svg": "b69f8f6ac88d2308672402e6b7ef2f5c",
"assets/assets/images/ic_circulo_suspenso.svg": "5d1494e06d83cdfaec572a757d723ebc",
"assets/assets/images/mapa-pe.png": "f64566f94bd7f7dedfdf5ff4497a8ef4",
"assets/assets/images/mapa-pr.png": "d8259a200c3c61855913b13097b73cbc",
"assets/assets/images/cilindro.png": "7692b7e731a9c835c08127d73db148b1",
"assets/assets/images/caixa-cor.png": "8a1e282883129c19dc79193bcebb28d6",
"assets/assets/images/duvida-cor.png": "d797beb15f968209171e363750b1bef8",
"assets/assets/images/mapa-es.png": "e7afa26f272e428f364ac846a753970d",
"assets/assets/images/qr-code.png": "33f1954a6f6fd79908afb8d1725bb2d8",
"assets/assets/images/ic_cadeado.png": "f300beee25442e90518eab07e44c7305",
"assets/assets/images/empresa.png": "461f67fe22fb07f72f49e87a2580d84a",
"assets/assets/images/dinheiro-cor.png": "2535c08f1cabe50f772c6e4754c946fb",
"assets/assets/images/cartao.png": "282d0afba88c0e218a623ed0592d1863",
"assets/assets/images/ordenar.png": "f41e476331f7c08b8a0297c7e2be6621",
"assets/assets/images/envio.png": "53ca208ce384792ddadf02233d327b73",
"assets/assets/images/ic_tributos.svg": "be4f8571795007ada4dcc592f4ff3466",
"assets/assets/images/ic_desistencia.png": "2c5cebeb8c4acd3f71af998bf87cd396",
"assets/assets/images/caminhao-cor.png": "6a29d0e05f1d9f6ff538368b65a8404f",
"assets/assets/images/caminhao-seta-outline-stroke-amarelo.png": "97b75a85870b5064c84d7c0a34733b1d",
"assets/assets/images/ic-cancelar-contrato.svg": "17b4179b6870d82e1db61a59124f1de8",
"assets/assets/images/senha.png": "92d1985fe361ea67f947dbca876a9560",
"assets/assets/images/banner_black_friday.png": "da6cef7a4103b9da794df1ab0c9b6619",
"assets/assets/images/caminhao-saida.svg": "40e67dbfeeb8796cf6bc0eca22c07eb7",
"assets/assets/images/recusar-encomenda-cor.png": "1c3bea86b09dc31557c0603a6bcf6ad0",
"assets/assets/images/caminhao-cancelado-stroke-amarelo.png": "d8a19aeebe9fbc976ba91237917cc598",
"assets/assets/images/telegrama-cor.png": "63db23bd58d6753bf3ff259b5f48741b",
"assets/assets/images/ic_pacote_prata.png": "f38f2bcad2a1bde83db40b08a5ec46e5",
"assets/assets/images/atendimento.png": "6b8d2017b6678f20d4ec1568a09b1995",
"assets/assets/images/ic_logo_correios_dark.png": "b1926a1623b00a3c8dbc5e26f28cb969",
"assets/assets/images/agencia.png": "1abce8b3802b98334c1c91c3411b1075",
"assets/assets/images/documento.png": "1fa2f99d3038d807e65bfdb24cca5126",
"assets/assets/images/marca_correios_base_web.svg": "04c38159d443bd5e9fa2be7ae32be8e8",
"assets/assets/images/marca_correios.png": "2f4812f132636a5e340caade2ad08ec2",
"assets/assets/images/mapa-am.png": "d819b3a60968e081a042b86dbcd23225",
"assets/assets/images/mapa-ba.png": "12d5f38cb4176cfa8a2665e5b1a0abdb",
"assets/assets/images/adobe.png": "0b90096d42cf2d2b04f0d7c6d9466a5f",
"assets/assets/images/mapa-ce.png": "e911c364959f002375743c0da6f0c5f6",
"assets/assets/images/alerta-outline-stroke-amarelo.png": "1985a639130d78266dc37c0cccdd44d4",
"assets/assets/images/logo-correios.png": "b5b0fed0274d71c9ed7e39e64fd28a89",
"assets/assets/images/fatura-cor.png": "a62145530ba221f5eaa46995c42dfd3c",
"assets/assets/images/documento-cor.png": "f7721243dbd707370d466dcc597fba43",
"assets/assets/images/ic_pin.png": "0fe3ff29f1f27975355dd1631cf1dfc2",
"assets/assets/images/mapa-al.png": "0a27ec52a8318be8a6371819fa861ad3",
"assets/assets/images/ic_consulta_antecipacao.svg": "f0630be21cbcaa1e4394fdfe8bdf1f10",
"assets/assets/images/aviso-recebimento.png": "5f23867ee29fbbc0b7c74f1c224f2870",
"assets/assets/images/mapa-to.png": "b94e5b9fa4641e841c0f191e6a873554",
"assets/assets/images/logo_correios_azul.png": "a859284e23a417c58e017dc96a0fa67f",
"assets/assets/images/ic_pacote_infinite.png": "40eefd737444cc008e65ba6d7fedb33c",
"assets/assets/images/marca-orientacoes.png": "2707c79e70a46fed4adf901c55e7cde4",
"assets/assets/images/ic_pacote_diamante.png": "3bfc05d1c98c77a0cd6ce0e73280e1e1",
"assets/assets/images/mapa-ma.png": "a90180cd24119e7a918b721562e03ba2",
"assets/assets/images/ic_usuario.png": "f1d3e184f57bedc36aaafe4ea1b7fe37",
"assets/assets/images/postado-encomenda-outlone-stroke.png": "03756c5fcca0c208da490feaed9c94dc",
"assets/assets/images/ic_identidade.svg": "289cf54496437ce280701bafe22dff25",
"assets/assets/images/endereco-cor.png": "6ce6929099c0d61b09a8d1ca8ca6a1ca",
"assets/assets/images/bannerportal.png": "f0dec96ad4965586f056212fbe302fa1",
"assets/assets/images/arquivo-pdf.svg": "d64c3439ada241c45ba5811d4ff74ed3",
"assets/assets/images/ic_pacote_platinum.png": "f30d0532e85ffb40e3bf1402f24fc403",
"assets/assets/images/empresa-cor.png": "cd0e990a98297d7a371903ec2a743e23",
"assets/assets/images/mapa-ac.png": "e629172284c0448ad7fc6db5f4ad7ce9",
"assets/assets/images/ic_alert.png": "86f948d97d7bf98d69cfcdc85926588b",
"assets/assets/images/caminhao-lupa-outline-stroke.png": "42aae8384981d422039951466ed1b098",
"assets/assets/images/caminhao-cancelado-stroke.png": "7feb48bb7c1e2dae5727dfbf0178a4c6",
"assets/assets/images/carta-cor.png": "1235ca14affd19f6cd02f5a9ba387fe5",
"assets/assets/images/mapa-mt.png": "85389f00d1f3bfbacab8aba3be6eb300",
"assets/assets/images/arquivo-csv.svg": "e4789240622f2aadb0997ef16ba69396",
"assets/assets/images/mapa-mg.png": "490b489dea222dbe2ca0cb14d333409a",
"assets/assets/images/caminhao-seta-outline-stroke.png": "60d6aa789d80713b3d00ad5f8ee21aeb",
"assets/assets/images/logistica-reversa-cor.png": "0fc42e4d0fb7f63ef282475ab06d2c77",
"assets/assets/images/ic_cancelamento.png": "c05a182d72a70bf483714235159cd11e",
"assets/assets/images/ic_consulta_previa.svg": "8fd406b0e482bc6848825074308b16f1",
"assets/assets/images/cartao_postagem.png": "81b90071a90cb2f6ea1b164603d61dce",
"assets/assets/images/manual-marca-correios.png": "01f0770caa227cd9bd9590708ec59b5b",
"assets/assets/images/mapa-brasil-cinza.png": "99d49eb15c164f6a01244c1234675e24",
"assets/assets/images/splash_correios.png": "6c021e9f4d0ecd2ff087d692ee441da0",
"assets/assets/images/ic_pre_postagem.svg": "6ecb84b52f2dc20f119e252af682ae31",
"assets/assets/images/relogio-cor.png": "3043c20790d7575178b0a0b5341af892",
"assets/assets/images/importar.png": "16fb0c79e44e0a67dcbf21c5bd0110d4",
"assets/assets/images/mapa-ap.png": "4cf2ab4571be76e110937296b6af2ec0",
"assets/assets/images/tributos.png": "ffbccda4f6e801c0a21b184e13ffd51d",
"assets/assets/images/mapa-ms.png": "56e20cdb129415e1aa3619e8a7030698",
"assets/assets/images/carta-aberta-cor.png": "27e2915e06420572c3a33fe2fb9bf024",
"assets/assets/images/logo_correios_amarelo.png": "069c884d2c3e433fa2d0ad8875a82ce3",
"assets/assets/images/receber-encomenda-outline-stroke-amarelo.png": "372b5f18bf8a21c19f2c15e73cffc61d",
"assets/assets/images/papeis.png": "342ba97b630124755d30edb526d63798",
"assets/assets/images/aproxime.png": "79e2cc78dd3d25f167101d56e8065021",
"assets/assets/images/ic_cilindro.png": "394f92415b5a1f8dca5d64d27d8259f2",
"assets/assets/images/ic_lupa.png": "aee80cbb2e94d437ddd76d9a674a3272",
"assets/assets/images/header-infinite.png": "e8255733d5cb569d221afd7d60824f46",
"assets/assets/images/ic_caixa.png": "bdf6c8a9ab9d287e3581902987212460",
"assets/assets/images/visto.png": "3a82474089e4864bef45e2bcb1751e5f",
"assets/assets/images/ic-atendimento.png": "7668d40c6e72f67a1113a2eccaa75da7",
"assets/assets/images/prisma_header.png": "103a0c785f82ea6bdca3b5188c91cfd3",
"assets/assets/images/ouvidoria.png": "f1f5668ad3d866d5e98228cba3085cb1",
"assets/assets/images/mapa.png": "a25b8747c773617936acb25bfe6e95a0",
"assets/assets/images/ic_clube_correios.png": "5b6da6e5dd5a1d0d2f00edc63f4d85b6",
"assets/assets/images/ic-telefone.png": "84c69028175f8cdd4764965c11b2dcd2",
"assets/assets/images/ampulheta.png": "73497369f3601248a2cca0d1f37b3b1f",
"assets/assets/images/header-clube-correios.png": "9fe5c14985a3479d28128c368f7ef269",
"assets/assets/images/codigo-barra.png": "4f30edc50dd3ed6fa17aa217183fe516",
"assets/assets/images/mapa-pi.png": "fbb5dad7bfe0f64522f0682de40be258",
"assets/assets/images/mapa-se.png": "442e3615e7f931a20616cf0753b2358e",
"assets/assets/images/ic_carta.png": "156683006c461e435b1607af27d2689c",
"assets/assets/images/dinheiro.svg": "8748e040083932595f08c2eab07e680d",
"assets/assets/images/cilindro-cor.png": "9d4a0a1ee253100bb0219e830698b0fe",
"assets/assets/images/mapa-sp.png": "71b67df565021c99176162a65d489b20",
"assets/assets/images/pin-correios-cor.png": "97eb1e2a1a5cd904c9cb89117f89ff6c",
"assets/assets/images/mundo-cor.png": "852667b7d7cbd6c201aae316b6647e5c",
"assets/assets/images/atendente_virtual.png": "cb4543f781dc493cda732bda0eb85254",
"assets/assets/images/atendimento-cor.png": "a3e5e8bcb098ab7b89f8b0454f70268a",
"assets/assets/images/marca_correios_360.png": "2ab426ccc68a15394598f3cdae190e4a",
"assets/assets/images/contrato.png": "cb99cab726bb47d1959a45a3914913be",
"assets/assets/images/ic_configuracoes.png": "cd8f35363a7a513e24845bfa3ee66741",
"assets/assets/images/ic_contrato_encerrado.svg": "5cb1f3f2c07cb77a144bd65ce5dfe5fe",
"assets/assets/images/ic-email.png": "2b2cbe8a7c68854aa87f2c84d176f674",
"assets/assets/images/header-bronze.png": "0520ee09a03a61991646c59ef7865c35",
"assets/assets/images/ic_sair.png": "cf6b54bdc012e28acf59ba49802b7050",
"assets/assets/images/ic_logo_correios_azul.png": "3d2081ad80eabe0c76aae2ffc212d2fd",
"assets/assets/images/mala-direta-cor.png": "31435b0b2c00ba986357e072bc5e2ba3",
"assets/assets/images/usuario_excluir.png": "c157b9a0b5aa1735ce594bb041cab8a7",
"assets/assets/images/alerta-outline-stroke.png": "f27ad3ec68adb2066c36a24bf7d15e45",
"assets/assets/images/appIconAndroid.png": "8e7c4d857f3cc6953cce857eaebd1d84",
"assets/assets/images/ic_alerta.svg": "d4ca7cfb9a352625c33d40c8fd1f0079",
"assets/assets/images/card-papai-noel-correios.png": "4e452a4fb27b8d000929196a216d25d7",
"assets/assets/images/mapa-sc.png": "00b22f592a011b294564230334d91495",
"assets/assets/images/contrato-cor.png": "a7d5e4477df12f3f7340369e4afe22e3",
"assets/assets/images/appIconIOS.png": "7a1e2f9182d2994441d4be06c42044d2",
"assets/assets/images/termoexclusivoIcon.png": "060779f2f3c298b55d087a945a1fc1e0",
"assets/assets/images/marca_correios_360_dark.png": "cad41f35dc5e609a9a94de1e6dcc4eed",
"assets/assets/images/mapa_internacional.svg": "abe43974a268cd4f8292ab6b99b6c13b",
"assets/assets/images/mapa-rr.png": "1485668bc666d0a066fa63d7a0dddc92",
"assets/assets/images/lixo.png": "7136d7ec5b9c7e8488450cb43c5017bb",
"assets/assets/images/precos-prazos.svg": "a5895bcec084de9242f9662d6cc0e792",
"assets/assets/images/ic-seta.png": "2aa5cac78e4e919d0ea10aaf16f6a9b2",
"assets/assets/images/ic_seta_abre.png": "b07aee3e5cc26c6e23e4963f707717bf",
"assets/assets/images/ic_iphonex.png": "b12b84b6f6951d714f12c7015de8b85b",
"assets/assets/images/ic_servicos.svg": "871faf8a2c25afc7ec45b62e24a67c6a",
"assets/assets/images/ic-certificado-cor.png": "95b5c7cde6f5a7957a9b775b86cecd03",
"assets/assets/images/mapa-rs.png": "39789492978f0cb2f629018d6235a3bd",
"assets/assets/images/header-prata.png": "84dde7ad1e96fed4f4d91316c8767710",
"assets/assets/images/ic_logo_correios_amarelo.png": "908c944caeeeb7f29d725ac9f6091510",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
