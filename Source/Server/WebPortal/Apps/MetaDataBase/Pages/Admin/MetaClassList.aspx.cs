﻿using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace Mediachase.Ibn.Web.UI.MetaDataBase.Pages.Admin
{
	public partial class MetaClassList : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			pT.Title = GetGlobalResourceObject("IbnFramework.GlobalMetaInfo", "MetaClassList").ToString();
		}
	}
}
