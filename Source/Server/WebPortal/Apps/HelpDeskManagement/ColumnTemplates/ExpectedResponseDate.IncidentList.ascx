<%@ Control Language="C#" AutoEventWireup="true" ClassName="Mediachase.Ibn.Web.UI.HelpDeskManagement.ColumnTemplates.ExpectedResponseDate_IncidentList" %>
<%# (Eval("ExpectedResponseDate") == DBNull.Value) ? "" : (((DateTime)Eval("ExpectedResponseDate")).ToShortDateString() + " " + ((DateTime)Eval("ExpectedResponseDate")).ToShortTimeString())%>