<%@ Control Language="C#" AutoEventWireup="true" Inherits="Mediachase.Ibn.Web.UI.Controls.Util.BaseType" ClassName="Mediachase.Ibn.Web.UI.MetaUI.Primitives.DateTime" %>
<%# (DataItem == null || DataItem.Properties[FieldName].Value == null) ? "" : String.Format("{0} {1}", ((System.DateTime)DataItem.Properties[FieldName].Value).ToShortDateString(), ((System.DateTime)DataItem.Properties[FieldName].Value).ToShortTimeString())%>
