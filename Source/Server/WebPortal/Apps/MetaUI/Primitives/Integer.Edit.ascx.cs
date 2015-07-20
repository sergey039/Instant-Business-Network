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

using Mediachase.Ibn.Data.Meta.Management;
using Mediachase.Ibn.Web.UI.Controls.Util;

namespace Mediachase.Ibn.Web.UI.MetaUI.Primitives
{
	public partial class Integer_Edit : System.Web.UI.UserControl, IEditControl
	{
		protected void Page_Load(object sender, EventArgs e)
		{
		}

		#region IEditControl Members

		#region Value
		public object Value
		{
			set
			{
				if (value != null)
					txtValue.Text = value.ToString();
			}
			get
			{
				if (AllowNulls && txtValue.Text.Trim() == String.Empty)
					return null;
				else
					return int.Parse(txtValue.Text.Trim());
			}
		}
		#endregion

		#region ShowLabel
		public bool ShowLabel
		{
			set { }
			get { return true; }
		}
		#endregion

		#region Label
		public string Label
		{
			set { }
			get { return ""; }
		}
		#endregion

		#region AllowNulls
		public bool AllowNulls
		{
			set
			{
				vldValue_Required.Visible = !value;
			}
			get
			{
				return !vldValue_Required.Visible;
			}
		}
		#endregion

		#region RowCount
		public int RowCount
		{
			set { }
			get { return 1; }
		}
		#endregion

		#region ReadOnly
		public bool ReadOnly
		{
			set
			{
				txtValue.Enabled = !value;
				vldValue_Required.Enabled = !value;
				vldValue_Range.Enabled = !value;
				if (value)
				{
					txtValue.CssClass = "text-readonly";
				}
			}
			get
			{
				return !txtValue.Enabled;
			}
		}
		#endregion

		#region LabelWidth
		public string LabelWidth
		{
			set { }
			get { return ""; }
		}
		#endregion

		#region BindData
		public void BindData(MetaField field)
		{
			if (field.Attributes.ContainsKey(McDataTypeAttribute.IntegerMinValue))
				vldValue_Range.MinimumValue = field.Attributes[McDataTypeAttribute.IntegerMinValue].ToString();
			if (field.Attributes.ContainsKey(McDataTypeAttribute.IntegerMaxValue))
				vldValue_Range.MaximumValue = field.Attributes[McDataTypeAttribute.IntegerMaxValue].ToString();
		}
		#endregion

		#region FieldName
		public string FieldName
		{
			get
			{
				if (ViewState["FieldName"] != null)
					return ViewState["FieldName"].ToString();
				else
					return "";
			}
			set
			{
				ViewState["FieldName"] = value;
			}
		}
		#endregion

		#region TabIndex
		public short TabIndex
		{
			set
			{
				txtValue.TabIndex = value;
			}
		}
		#endregion
		#endregion
	}
}