<%@ Control Language="C#" AutoEventWireup="true" ClassName="Mediachase.Ibn.Web.UI.HelpDeskManagement.ColumnTemplates.ExpectedResolveDate_IncidentList" %>
<%# (Eval("ExpectedResolveDate") == DBNull.Value) ? "" : (((DateTime)Eval("ExpectedResolveDate")).ToShortDateString() + " " + ((DateTime)Eval("ExpectedResolveDate")).ToShortTimeString())%>