﻿using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Resources;

namespace Mediachase.UI.Web.Common
{
	public partial class ResourceUtilGraphForObject : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			ResourceManager LocRM = new ResourceManager("Mediachase.UI.Web.App_GlobalResources.Projects.Resources.strPageTitles", typeof(ResourceUtilGraphForObject).Assembly);
			pT.Title = LocRM.GetString("tResourceUtilization");
		}
	}
}
