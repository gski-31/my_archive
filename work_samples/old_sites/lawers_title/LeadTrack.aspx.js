document.write('<script language="JavaScript" type="text/javascript">\n<!--\n');
document.write('var rn = Math.round(30000*Math.random());\n//-->\n</script>');
document.write('<script language="JavaScript" src="LeadTrack.aspx?pid=' + escape(LTpid) + '&plid=' + escape(LTplid) + '&pgid=' + escape(LTpgid) + '&rn=' + escape(rn)+ '"></script>');
