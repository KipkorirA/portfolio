;/*FB_PKG_DELIM*/

__d("useMAWHasUserVisibleErrors",["ReQL","ReQLSuspense","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(){var a=(h||(h=c("useReStore")))(),b=d("ReQLSuspense").useFirst(function(){return d("ReQL").fromTableDescending(a.tables.user_visible_errors).filter(function(a){a=a.presentationStyle;return a==="banner"})},[a],f.id+":24");return b!=null}g["default"]=a}),98);
__d("useMAWIsUnsupportedBrowserNUXShown",["MAWSetupUtils","WebStorage","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(){var a=d("MAWSetupUtils").useIsIDBOperational();if(c("gkx")("24101")===!0)return!0;return!a||(h||(h=c("WebStorage"))).getLocalStorage()==null?!0:!1}g.useMAWIsUnsupportedBrowserNUXShown=a}),98);
__d("usePolarisEBProcessStateAndSubscribeForChanges",["Promise","ReQL","ReQLSuspense","gkx","isInstamadilloEB","promiseDone","react","requireDeferred","useMAWHasUserVisibleErrors","useMAWIsUnsupportedBrowserNUXShown","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;e=j||d("react");var k=e.useEffect,l=e.useState,m=e.c,n=c("requireDeferred")("MWEncryptedBackupsProcessBackupIdsDEPRECATED").__setRef("usePolarisEBProcessStateAndSubscribeForChanges"),o=c("requireDeferred")("mwEBSetBackupState").__setRef("usePolarisEBProcessStateAndSubscribeForChanges"),p=c("isInstamadilloEB")()||c("gkx")("23914");function a(a){var e=m(9);a=a.initialBackupState;var g=(i||(i=c("useReStore")))(),j=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(g.tables.encrypted_backups)},[g],f.id+":52"),q=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(g.tables.secure_encrypted_backups_client_state)},[g],f.id+":56"),r=d("useMAWIsUnsupportedBrowserNUXShown").useMAWIsUnsupportedBrowserNUXShown(),s=c("useMAWHasUserVisibleErrors")(),t=r||s;r=t?0:a;s=l(r||1);a=s[0];var u=s[1];e[0]!==j.length||e[1]!==g||e[2]!==t?(r=function(){p&&j.length>0?c("promiseDone")((h||(h=b("Promise"))).all([n.load(),o.load()]),function(a){var b=a[0],d=a[1];c("promiseDone")(b.processBackupIdsStoredProcedure(g),function(a){d({setBackupState:u,state:t?0:a})})}):u(0)},e[0]=j.length,e[1]=g,e[2]=t,e[3]=r):r=e[3];e[4]!==j||e[5]!==g||e[6]!==q||e[7]!==t?(s=[j,g,q,t],e[4]=j,e[5]=g,e[6]=q,e[7]=t,e[8]=s):s=e[8];k(r,s);return a}g["default"]=a}),98);