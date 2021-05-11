$ ("button[id='takeWallet']").on('click', () => {
		$ ("div[id='noneWallet']").fadeOut ('slow');
		$ ("div[id='blockWallet']").fadeIn ('slow');
				} );
$ ("button[id='openWallet']").on('click', () => {
				$ ("div[id='blockWallet']").fadeOut ('slow');
				$ ("div[id='walletWallet']").fadeIn ('slow');
				$ ("div[id='viewCache']").fadeIn ('slow');
				} );
$ ("button[id='closeWallet']").on('click', () => {
		$ ("div[id='viewCache']").fadeOut ('slow');
		$ ("div[id='walletWallet']").fadeOut ('slow');
		$ ("div[id='noneWallet']").fadeIn ('slow');
				} );
				